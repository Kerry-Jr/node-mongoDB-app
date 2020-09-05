const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
      type: String
  },
  age: {
    type: Number
  }
})

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})


const me = new User({
  name: 'Kerry',
  age: 35
})

me.save().then((me) => {
  console.log(me)
}).catch((error) => {
  console.log('Error!', error)
})


const task = new Task({
  description: 'Learn the mongoose Library',
  completed: false
})
task.save().then(() => {
  console.log(task)
}).catch((e) => {
  console.log(e)
})
