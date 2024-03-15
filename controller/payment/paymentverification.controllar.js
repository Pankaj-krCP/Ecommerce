const asyncHandler = require("express-async-handler");

const paymentVerification = asyncHandler(async (req, res) => {
  const { razorpayOrderId, razorpayPaymentId } = req.body;
  res.json({
    razorpayOrderId,
    razorpayPaymentId,
  });
});

module.exports = paymentVerification;
