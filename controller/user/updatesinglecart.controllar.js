const asyncHandler = require("express-async-handler");
const Cart = require("../../models/cartModel");

const updateSingleCart = asyncHandler(async (req, res) => {
  const { cartItemID, quantity } = req.body;
  const { _id: userID } = req.user;

  try {
    const cart = await Cart.findOne({ orderby: userID });

    if (!cart) {
      res.status(404);
      throw new Error("Cart not found");
    }

    const itemIndex = cart.products.findIndex(
      (item) => item._id.toString() === cartItemID
    );

    if (itemIndex === -1) {
      res.status(404);
      throw new Error("Item not found in cart");
    }

    cart.products[itemIndex].count = quantity;
    cart.cartTotal = cart.products.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
    await cart.save();
    const updatedCart = await Cart.findOne({ orderby: userID });
    res.json(updatedCart);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = updateSingleCart;
