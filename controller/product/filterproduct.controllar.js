const Product = require("../../models/productModel");
const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const filterProduct = asyncHandler(async (req, res) => {
  const { minprice, maxprice, color, category, availibility, brand } =
    req.params;
  try {
    const filterProduct = await Product.find({
      price: {
        $gte: minprice,
        $lte: maxprice,
      },
      category,
      brand,
      color,
    });
    res.json(filterProduct);
  } catch (error) {}
});

module.exports = filterProduct;
