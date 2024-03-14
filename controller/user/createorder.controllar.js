const asyncHandler = require("express-async-handler");
const Order = require("../../models/orderModel");

const createOrder = asyncHandler(async (req, res) => {
  const {
    shippingInfo,
    orderItems,
    totalPrice,
    totalPriceAfterDiscount,
    paymentInfo,
  } = req.body;
  const { _id } = req.user;
  try {
    const order = await Order.create({
      orderBy: _id,
      orderItems,
      shippingInfo,
      paymentInfo,
      totalPrice,
      totalPriceAfterDiscount,
    });
    res.json({
      order,
      success: true,
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = createOrder;
