const Product = require("../../models/productModel");
const asyncHandler = require("express-async-handler");

const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.send(deleteProduct);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = deleteProduct;
