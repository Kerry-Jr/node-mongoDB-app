// Destructuring off the mongoDB object
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = process.env.MONGODB_URL;
const databaseName = "task-manager";

const id = new ObjectID();
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    const db = client.db(databaseName);
  }
);
