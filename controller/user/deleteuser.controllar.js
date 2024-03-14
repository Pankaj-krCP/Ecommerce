const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");
const validateMongoDbId = require("../../utils/validateMongodbId");

const deleteaUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteUser = await User.findByIdAndDelete({ _id: id });
    res.json(deleteUser);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = deleteaUser;
