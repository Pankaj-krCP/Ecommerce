const asyncHandler = require("express-async-handler");
const Cart = require("../../models/cartModel");
const validateMongoDbId = require("../../utilss/validateMongodbId");

const deleteSingleCart = asyncHandler(async (req, res) => {
  const { id: productID } = req.params;
  const { _id: userID } = req.user;
  validateMongoDbId(productID);
  validateMongoDbId(userID);
  try {
    const cart = await Cart.findOne({ orderby: userID });
    const productIndex = cart.products.findIndex(
      (product) => product._id.toString() === productID
    );

    if (productIndex !== -1) {
      const deletedProductPrice =
        cart.products[productIndex].count * cart.products[productIndex].price;
      cart.cartTotal -= deletedProductPrice;
      cart.products.splice(productIndex, 1);
      if (cart.products.length === 0) {
        await Cart.deleteOne({ _id: cart._id });
        res.json({ message: "Cart deleted successfully" });
      } else {
        const updatedCart = await cart.save();
        res.json(updatedCart);
      }
    } else {
      res.status(404);
      throw new Error("Product not found in cart");
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = deleteSingleCart;
