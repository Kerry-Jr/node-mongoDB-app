const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
      type: String,
      required: true,
      trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
        if(!validator.isEmail(value)) {
          throw new Error('Email is invalid')
        }

    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if(value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cannot contain "password"')
      }
    }
  }
})

const Task = mongoose.model('Task', {
  description: {
    type: String,
    trim: true,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})


// const me = new User({
//   name: '         Merry              ',
//   email: 'MERRY@GMAIL.COM         ',
//   password: '1265327Ksq!'
// })
//
// me.save().then((me) => {
//   console.log(me)
// }).catch((error) => {
//   console.log('Error!', error)
// })


const task = new Task({
  description: '                  Get a good programming job and stop be lazy',
  completed: false
})
task.save().then(() => {
  console.log(task)
}).catch((e) => {
  console.log(e)
})
