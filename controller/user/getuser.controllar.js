const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");
const validateMongoDbId = require("../../utils/validateMongodbId");

const getaUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getUsers = await User.findOne({ _id: id });
    res.json(getUsers);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = getaUser;
