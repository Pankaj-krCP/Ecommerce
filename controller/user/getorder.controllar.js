const asyncHandler = require("express-async-handler");
const Order = require("../../models/orderModel");
const validateMongoDbId = require("../../utils/validateMongodbId");

const getOrders = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const userorders = await Order.findOne({ orderby: _id })
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(userorders);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getOrders;
