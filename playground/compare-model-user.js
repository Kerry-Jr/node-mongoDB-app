const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Password cannot contain "password"');
      }
    },
  },
});

userSchema.statics.findByCredentials = async (email, password) => {
  const user = User.findOne({ email })
  if(!user){
    throw new Error('Unable to login')
  }
  const isMatch = await bcrypt.compare(password, user.password)

  if(!isMatch){
    throw new Error('Unable to login')
  }
  return user
}

// has the plain text password b4 saving
userSchema.pre("save", async function (next) {
  const user = this

  if(user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)

  }

  next()
});

const User = mongoose.model("User", userSchema);

module.exports = User;
