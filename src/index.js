const express = require('express')
const bcrypt = require('bcrypt')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT || 3000


//express middleware
// app.use((req, res, next) => {
// if(req.method === 'GET') {
//   res.send('GET requests are disabled')
// }else {
//   next()
// }
// })


app.use((req, res, next) => {
  res.status(503).send('Sorry site is down for bug zapping and upgrading rocket boosters ')
})


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
  console.log('Server is up on port ' + port)
})






const jwt = require('jsonwebtoken')



const myFunction = async () => {

const token = jwt.sign({ _id: '123abc' }, 'thisismynewcourse', {
  expiresIn: '7 days'
})

console.log(token)

const data =  jwt.verify(token, 'thisismynewcourse')

console.log(data)

}

myFunction()
















// this was the example for use in the myFunction() for bcrypt password hashing
// const password = 'Red12345!'
// const hashedPassword = await bcrypt.hash(password,8)
//
// console.log(password)
// console.log(hashedPassword)
//
// const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
// console.log(isMatch)
