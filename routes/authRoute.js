const express = require("express");
const {
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
} = require("../controller/user/index.js");
const {
  checkout,
  paymentVerification,
} = require("../controller/payment/index.js");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware.js");

const router = express.Router();

//Auth
router.post("/register", createUser);
router.post("/login", loginUserControl);
router.post("/admin-login", loginAdmin);
router.get("/logout", logOut);
router.post("/forgot-password-token", forgotPasswordToken);
router.post("/reset-password/:token", resetPassword);
router.put("/password", authMiddleware, updatePassword);
router.get("/refreshtoken", handleRefreshToken);

//Wishlist
router.get("/wishlist", authMiddleware, getWishlist);

//Cart
router.post("/cart", authMiddleware, userCart);
router.get("/cart", authMiddleware, getUserCart);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.put("/update-product-cart/:id", authMiddleware, updateSingleCart);
router.delete("/delete-product-cart/:id", authMiddleware, deleteSingleCart);
router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.post("/cart/create-order", authMiddleware, createOrder);

//Orders User
router.post("/order/checkout", authMiddleware, checkout);
router.post("/order/paymentverification", authMiddleware, paymentVerification);

//Order Admin work
router.get("/getorderbyid/:id", authMiddleware, isAdmin, getOrderById);
router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getOrderByUserId);
router.put(
  "/order/update-order/:id",
  authMiddleware,
  isAdmin,
  updateOrderStatus
);

//Address
router.put("/save-address", authMiddleware, saveAddress);

//User
router.get("/all-users", getallUser);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", deleteaUser);

module.exports = router;
