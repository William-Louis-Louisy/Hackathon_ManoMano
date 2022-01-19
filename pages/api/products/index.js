import base from "../../../middlewares/common";
import Product from "../../../models/product";

async function getProducts(req, res) {
  //get Many products by Id
  if (req.body.listOfProducts) {
    console.log("handling list of products");
    const products = await Product.getManyProductsById(req.body.listOfProducts);
    res.status(201).send(products);
    // get One product by Id
  } else if (req.body.productId) {
    console.log("handling one product");
    const product = await Product.getOneProduct(req.body.productId);
    res.status(201).send(product);
  } else if (req.body.filters) {
    console.log("handling products with filters");
    const products = await Product.getProductsByFilters(req.body.filters);
    res.status(201).send(products);
  } else {
    // Get all the products
    console.log("handling all products");
    const products = await Product.getAllProducts();
    res.status(201).send(products);
  }
}

async function postProducts(req, res) {
  if (req.body) {
    console.log("posting product");
    const newProductId = await Product.createProduct(req.body);
    console.log("new Product : ", newProductId);
    res.status(200).send({
      _id: newProductId,
      ...req.body,
    });
  }
}

export default base().post(postProducts).get(getProducts);
