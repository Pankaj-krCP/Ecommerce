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
  console.log(req.body);
  try {
    const order = await Order.create({
      orderBy: _id,
      orderItems: orderItems,
      shippingInfo: shippingInfo,
      paymentInfo: paymentInfo,
      totalPrice: totalPrice,
      totalPriceAfterDiscount: totalPriceAfterDiscount,
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
