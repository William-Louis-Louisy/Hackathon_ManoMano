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

function getProductsByFilters(filters) {
  return collection.find(filters).toArray();
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
  getProductsByFilters,
  getAllProducts,
  getOneProduct,
};
