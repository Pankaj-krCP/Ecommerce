const createUser = require("./signup.controllar");
const loginUserControl = require("./loginuser.controllar");
const loginAdmin = require("./loginadmin.controllar");
const getallUser = require("./getalluser.controllar");
const getaUser = require("./getuser.controllar");
const deleteaUser = require("./deleteuser.controllar");
const updatedUser = require("./updateuser.controllar");
const handleRefreshToken = require("./refreshtoken.controllar");
const blockUser = require("./blockuser.controllar");
const unblockUser = require("./unblockuser.controllar");
const logOut = require("./logout.controllar");
const updatePassword = require("./updatepassword.controllar");
const forgotPasswordToken = require("./forgotpasswordtoken.controllar");
const resetPassword = require("./resetpassword.controllar");
const createOrder = require("./createorder.controllar");
const getOrderById = require("./getorderbyid.controllar");
const getAllOrders = require("./getallorder.controllar");
const getOrderByUserId = require("./getuserorder.controllar");
const updateOrderStatus = require("./updateorderstatus.controllar");
const getWishlist = require("./getwishlist.controllar");
const saveAddress = require("./saveaddress.controllar");
const userCart = require("./usercart.controllar");
const getUserCart = require("./getusercart.controllar");
const emptyCart = require("./emptycart.controllar");
const deleteSingleCart = require("./deletesinglecart.controllar");
const updateSingleCart = require("./updatesinglecart.controllar");
const applyCoupon = require("./applycoupon.controllar");

module.exports = {
  createUser,
  loginUserControl,
  loginAdmin,
  getallUser,
  getaUser,
  deleteaUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logOut,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  createOrder,
  getOrderById,
  updateOrderStatus,
  getAllOrders,
  getOrderByUserId,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  deleteSingleCart,
  updateSingleCart,
};
