const db = require("../db-config");
const { ObjectId } = require("mongodb");
const collection = db.collection("images");

// CRUD for images
function getImagesByType(filters) {
  return collection.find(filters).toArray();
}

function addImage(data) {
  return collection.insertOne(data).then((result) => result.insertedId);
}

module.exports = {
  getImagesByType,
  addImage,
};
