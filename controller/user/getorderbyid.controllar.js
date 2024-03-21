const asyncHandler = require("express-async-handler");
const Order = require("../../models/orderModel");
const validateMongoDbId = require("../../utilss/validateMongodbId");

const getOrderById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const order = await Order.findOne({ _id: id })
      .populate("orderItems.product")
      .populate("orderBy")
      .exec();
    res.json(order);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getOrderById;
