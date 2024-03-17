const Product = require("../../models/productModel");
const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    console.log(req.body);
    const newProduct = await Product.create(req.body);
    console.log("test");
    res.json(newProduct);
  } catch {
    throw new Error(error);
  }
});

module.exports = createProduct;
