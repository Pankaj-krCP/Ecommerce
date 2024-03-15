const Razorpay = require("razorpay");
const asyncHandler = require("express-async-handler");

const instance = new Razorpay({
  key_id: process.env.razorpay_key_id,
  key_secret: process.env.razorpay_key_secret,
});

const checkout = asyncHandler(async (req, res) => {
  try {
    const { amount } = req.body;
    const option = {
      amount: amount * 100,
      currency: "INR",
    };
    const order = await instance.orders.create(option);

    res.json({
      sucess: true,
      order,
    });
  } catch (error) {
    throw new Error("Some Order not Succesfull");
  }
});

module.exports = checkout;
