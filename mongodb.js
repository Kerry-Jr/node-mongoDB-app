// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID


// Destructuring off the mongoDB object
const { MongoClient, ObjectID } = require('mongodb')



const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())
MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }
  const db = client.db(databaseName)

  db.collection('tasks').deleteOne({
    description : "Give the cats some belly rubs!"
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })





// deleted (2) records from mongo database by anyone with the age of 38
// db.collection('users').deleteMany({
//   age: 38
// }).then((result) => {
//   console.log(result)
// }).catch((error) => {
//   console.log("I'm the error you are looking for!", error)
// })






// db.collection('tasks').updateMany({
//   completed: false
// }, {
//   $set: {
//     completed: true
//   }
// }).then((result) => {
//   console.log(result.modifiedCount)
// }).catch((error) => {
//   console.log(error)
// })
//


 // db.collection('users').updateOne({
 //    _id: new ObjectID("5f4c77ef4d72414fd473b5cc")
 //  }, {
 //    $inc: {
 //      age: 1
 //    }
 //  }).then((result) => {
 //      console.log(result)
 //    }).catch((error) => {
 //      console.log(error)
 //    })







  //challenge

  // db.collection('tasks').findOne({_id: new ObjectID("5f4c7ba760383c30d861933c")}, (error, task) => {
  //   if(error){
  //     return console.log(error, "Hey we couldn't find the task you were looking for! Please try again!")
  //   }
  //   console.log(task)
  // })
  //
  // db.collection('tasks').find().toArray((error, tasks) => {
  //   if(error){
  //     return console.log(error)
  //   }
  //   console.log(tasks)
  // })



  //
  //
  // db.collection('users').findOne({_id: ObjectID("5f5083bb7621bd75e89cc846")}, (error, user) => {
  //   if(error) {
  //     return console.log('Unable to fetch that user')
  //   }
  //   console.log(user)
  // })
  //
  // db.collection('users').find({ age: 38 }).toArray((error, users) => {
  //   console.log(users)
  //   console.log(error, 'this is the error we get back')
  // })
  //
  // db.collection('users').find({ age: 38 }).count((error, count) => {
  //   console.log(count)
  //   console.log(error, 'this is the error we get back')
  // })











 // db.collection('users').insertOne({
 //
 //   name: 'Darcy',
 //   age: 38
 // }, (error, result) => {
 //   if(error){
 //     return console.log('Unable to insert user')
 //   }
 //
 //   console.log(result.ops)
 //
 // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Darcy',
  //     age: 38
  //   },
  //   {
  //     name: 'Duncan',
  //     age: 13
  //   }], (error, result) => {
  //       if(error){
  //         return console.log('Unable to insert documents!')
  //       }
  //     console.log(result.ops)
  //   })


   // db.collection('tasks').insertMany([
   //   {
   //     description: 'Love on the wife',
   //     completed: true
   //   },
   //   {
   //     description: 'Give the cats some belly rubs!',
   //     completed: false
   //   },
   //   {
   //     description: 'Find a new job',
   //     completed: true
   //   }], (error, result) => {
   //   if ( error ) {
   //     return console.log('Unable to insert documents! Opps!')
   //   }
   //    console.log(result.ops)
   //
   // })

})
