const asyncHandler = require("express-async-handler");
const Cart = require("../../models/cartModel");
const validateMongoDbId = require("../../utilss/validateMongodbId");

const getUserCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const cart = await Cart.findOne({ orderby: _id }).populate(
      "products.product"
    );
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getUserCart;
