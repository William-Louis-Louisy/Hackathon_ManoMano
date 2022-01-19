const db = require("./db-config");
import Product from "./models/products";
const collection = db.collection("products");

async function reset() {}

reset();
