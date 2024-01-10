const express = require("express");
const createUser = require("../controller/userControllar.js");

const router = express.Router();
router.post("/register", createUser);

module.exports = router;
