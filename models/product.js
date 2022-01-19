const db = require("../db-config");
const { ObjectId } = require("mongodb");
const collection = db.collection("products");

// CRUD for products

function createProduct(informations) {
  return collection.insertOne(informations).then((result) => result.insertedId);
}

function getManyProductsById(listOfProductsId) {
  return collection
    .find({
      _id: {
        $in: listOfProductsId,
      },
    })
    .toArray();
}

function getProductsByCategory(category) {
  return collection.find({ category: category }).toArray();
}

function getProductsByType(type) {
  return collection.find({ type: type }).toArray();
}

function getAllProducts() {
  return collection.find().toArray();
}

function getOneProduct(id) {
  return collection.find({ _id: ObjectId(id) }).next();
}

module.exports = {
  createProduct,
  getManyProductsById,
  getProductsByCategory,
  getProductsByType,
  getAllProducts,
  getOneProduct,
};
