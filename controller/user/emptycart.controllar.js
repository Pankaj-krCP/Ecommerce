const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");
const Cart = require("../../models/cartModel");
const validateMongoDbId = require("../../utils/validateMongodbId");

const emptyCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const user = await User.findOne({ _id });
    const cart = await Cart.findOneAndDelete({ orderby: user._id });
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = emptyCart;
