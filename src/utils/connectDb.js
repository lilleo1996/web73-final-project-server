const { MongoClient } = require("mongodb");

const db = {};
const MONGODB_URL = "mongodb://localhost:27017"; // change
const DATABASE = "my-blog"; // change

async function connectDb() {
  const client = new MongoClient(MONGODB_URL);
  await client.connect();
  const database = client.db(DATABASE);

  db.posts = database.collection("posts"); // change
}

module.exports = { connectDb, db };
