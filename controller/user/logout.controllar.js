const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const uniqid = require("uniqid");
const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");
const Product = require("../../models/productModel");
const Cart = require("../../models/cartModel");
const Coupon = require("../../models/couponModel");
const Order = require("../../models/orderModel");
const validateMongoDbId = require("../../utils/validateMongodbId");
const generateToken = require("../../config/jwtToken");
const generateRefreshToken = require("../../config/refreshToken");
const sendEmail = require("../emailControllar");

const logOut = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    return res.status(204); // forbidden
  }
  await User.findOneAndUpdate(
    { refreshToken },
    {
      refreshToken: "",
    }
  );
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  return res.sendStatus(204); //forbidden
});

module.exports = logOut;
