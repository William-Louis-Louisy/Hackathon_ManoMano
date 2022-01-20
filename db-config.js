const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017/hackathonManoMano");
client.connect();

const database = client.db("hackathonManoMano");

module.exports = database;
