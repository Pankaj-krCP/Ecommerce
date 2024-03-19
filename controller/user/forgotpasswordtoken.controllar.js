const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");
const sendEmail = require("../email/index");

const forgotPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) throw new Error("User Not Found");
  try {
    const token = await user.createPasswordResetToken();
    await user.save();
    const resetURL = `Hi, Please follow this link to reset your password. This link is valid till 10 minutes. <a href="${process.env.FE_BASE_URL}reset-password/${token}">Click Here</a>`;
    const data = {
      to: email,
      text: "Hey User",
      subject: "Edigit: Forgot Password Link",
      html: resetURL,
    };
    sendEmail(data);
    res.json("success");
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = forgotPasswordToken;
