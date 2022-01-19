const db = require("../db-config");
const { ObjectId } = require("mongodb");
const collection = db.collection("products");

// CRUD for products

function createProduct(informations) {
  return collection.insertOne({ name: informations.name });
}

function getManyProducts(filtres) {
  return collection.find().toArray();
}

module.exports = {
  createProduct,
  getManyProducts,
};
