const express = require("express");
const {
  createUser,
  loginUserControl,
} = require("../controller/userControllar.js");

const router = express.Router();
router.post("/register", createUser);
router.post("/login", loginUserControl);
module.exports = router;
