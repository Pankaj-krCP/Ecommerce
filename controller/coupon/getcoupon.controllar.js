const Coupon = require("../../models/couponModel");
const validateMongoDbId = require("../../utils/validateMongodbId");
const asynHandler = require("express-async-handler");

const getCoupon = asynHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getAcoupon = await Coupon.findById(id);
    res.json(getAcoupon);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getCoupon;
