const asyncHandler = require("express-async-handler");
const Order = require("../../models/orderModel");
const validateMongoDbId = require("../../utilss/validateMongodbId");

const getOrderByUserId = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const orders = await Order.find({ orderBy: _id })
      .populate("orderItems.product")
      .populate("orderBy")
      .exec();
    res.json(orders);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getOrderByUserId;
