const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");
const validateMongoDbId = require("../../utils/validateMongodbId");

const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const blockUser = await User.findByIdAndUpdate(
      { _id: id },
      {
        isBlocked: true,
      },
      {
        new: true,
      }
    );
    res.json({
      message: "User Blocked",
    });
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = blockUser;
