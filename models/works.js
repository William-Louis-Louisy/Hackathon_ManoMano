const db = require("../db-config");
const { ObjectId } = require("mongodb");
const collection = db.collection("works");

// CRUD for works

function createWork(data) {
  console.log(data);
  return collection.insertOne({
    name: data.workName,
    category: data.category,
    place: {
      indoor: data.indoor,
      outdoor: data.outdoor,
      rooms: data.rooms,
    },
    rawMaterialList: data.rawMaterialList,
    toolList: data.toolList,
  });
}

function getWorks(filters) {
  return collection.find(filters).toArray();
}

module.exports = {
  createWork,
  getWorks,
};
