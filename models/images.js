const db = require("../db-config");
const { ObjectId } = require("mongodb");
const collection = db.collection("images");

// CRUD for images
function getImagesByType(type) {
  return collection.find(type).toArray();
}

function addImage(data) {
  return collection
    .insertOne({ type: data.type, name: data.name, imgUrl: data.url })
    .then((result) => result.insertedId);
}

module.exports = {
  getImagesByType,
  addImage,
};
