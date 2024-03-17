const Product = require("../../models/productModel");
const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateProduct = await Product.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.json(updateProduct);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = updateProduct;
