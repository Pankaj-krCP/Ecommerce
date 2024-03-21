const Coupon = require("../../models/couponModel");
const asynHandler = require("express-async-handler");

const getAllCoupons = asynHandler(async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getAllCoupons;
