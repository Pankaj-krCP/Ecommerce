const asyncHandler = require("express-async-handler");
const Order = require("../../models/orderModel");

const getAllOrders = asyncHandler(async (req, res) => {
  try {
    const alluserorders = await Order.find()
      .populate("orderItems.product")
      .populate("orderBy")
      .exec();
    res.json(alluserorders);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getAllOrders;
