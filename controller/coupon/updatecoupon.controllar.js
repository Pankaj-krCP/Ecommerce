const Coupon = require("../../models/couponModel");
const validateMongoDbId = require("../../utilss/validateMongodbId");
const asynHandler = require("express-async-handler");

const updateCoupon = asynHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatecoupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatecoupon);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = updateCoupon;
