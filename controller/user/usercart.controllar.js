const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");
const Cart = require("../../models/cartModel");
const validateMongoDbId = require("../../utils/validateMongodbId");

const userCart = asyncHandler(async (req, res) => {
  const cart = req.body;
  const { _id } = req.user;

  validateMongoDbId(_id);
  try {
    const user = await User.findById(_id);
    let alreadyExistCart = await Cart.findOne({ orderby: user._id });

    if (alreadyExistCart) {
      alreadyExistCart.products.push(cart);
      alreadyExistCart.cartTotal += cart.count * cart.price;
      alreadyExistCart = await alreadyExistCart.save();
      res.json(alreadyExistCart);
    } else {
      const totalPrice = cart.count * cart.price;
      const newCart = await new Cart({
        products: [cart],
        cartTotal: totalPrice,
        orderby: user._id,
      }).save();
      res.json(newCart);
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = userCart;
