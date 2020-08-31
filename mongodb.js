const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!')
  }
  const db = client.db(databaseName)

 // db.collection('users').insertOne({
 //   name: 'Kerry',
 //   age: 35
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


   db.collection('tasks').insertMany([
     {
       description: 'Love on the wife',
       completed: true
     },
     {
       description: 'Give the cats some belly rubs!',
       completed: false
     },
     {
       description: 'Find a new job',
       completed: true
     }], (error, result) => {
     if ( error ) {
       return console.log('Unable to insert documents! Opps!')
     }
      console.log(result.ops)

   })

})
