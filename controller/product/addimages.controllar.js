const Product = require("../../models/productModel");
const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const addImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const images = req.images;
  try {
    const product = await Product.findByIdAndUpdate(
      id,
      {
        $push: { images: { $each: images } },
      },
      { new: true }
    );
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = addImages;
