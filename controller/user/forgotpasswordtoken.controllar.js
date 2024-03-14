const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");
const sendEmail = require("../emailControllar");

const forgotPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new Error("User Not Found with this email");
  try {
    const token = await user.createPasswordResetToken();
    await user.save();
    const resetURL = `Hi,Please follow this link to reset your password.This link is valid till 10 minute. <a href='http://localhost:5000/api/user/reset-pasword${token}'>Click Here</a>`;
    const data = {
      to: email,
      text: "Hey User",
      subject: "Forgot Password Link",
      html: resetURL,
    };
    sendEmail(data);
    res.json(token);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = forgotPasswordToken;
