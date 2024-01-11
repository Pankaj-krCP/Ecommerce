const express = require("express");
const {
  createUser,
  loginUserControl,
  getallUser,
} = require("../controller/userControllar.js");

const router = express.Router();
router.post("/register", createUser);
router.post("/login", loginUserControl);
router.get("/all-users", getallUser);
module.exports = router;
