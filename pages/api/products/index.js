import base from "../../../middlewares/common";
import Product from "../../../models/product";

async function getProducts(req, res) {
  if (req.body) {
    console.log("handling product");
    const products = await Product.getManyProducts(req.body);
    res.status(201).send(products);
  } else {
    const products = await Product.getManyProducts();
    res.status(201).send(products);
  }
}

async function postProducts(req, res) {
  if (req.body) {
    console.log("posting product");
    const newProduct = await Product.createProduct(req.body);
    res.status(204).send(newProduct);
  }
}

export default base().post(postProducts).get(getProducts);
