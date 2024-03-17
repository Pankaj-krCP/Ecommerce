const Product = require("../../models/productModel");
const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const removeImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { public_id } = req.body;
  const product = await Product.findById(id);
  const imageToDelete = product?.images?.find(
    (item) => item.public_id.toString() === public_id.toString()
  );
  if (imageToDelete) {
    const product = await Product.findByIdAndUpdate(
      id,
      {
        $pull: { images: imageToDelete },
      },
      { new: true }
    );
    res.json(product);
  } else {
    throw new Error("Image not Exist");
  }
});

module.exports = removeImages;
