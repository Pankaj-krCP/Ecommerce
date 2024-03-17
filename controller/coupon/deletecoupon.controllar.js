const Coupon = require("../../models/couponModel");
const validateMongoDbId = require("../../utils/validateMongodbId");
const asynHandler = require("express-async-handler");

const deleteCoupon = asynHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletecoupon = await Coupon.findByIdAndDelete(id);
    res.json(deletecoupon);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = deleteCoupon;
