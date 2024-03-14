const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");

const getallUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getallUser;
