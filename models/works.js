const db = require("../db-config");
const { ObjectId } = require("mongodb");
const collection = db.collection("works");

// CRUD for works

function createWork(data) {
  console.log(data);
  return collection.insertOne(data).then((result) => result.insertedId);
}

function getWorks(filters) {
  return collection.find(filters).toArray();
}

module.exports = {
  createWork,
  getWorks,
};
