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

const loginUserControl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email: email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findUser?.id);
    const updateuser = await User.findByIdAndUpdate(
      findUser.id,
      {
        refreshToken: refreshToken,
      },
      {
        new: true,
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findUser?._id,
      firstName: findUser?.firstName,
      lastName: findUser?.lastName,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid credential");
  }
});

module.exports = loginUserControl;
