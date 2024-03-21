const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");
const validateMongoDbId = require("../../utilss/validateMongodbId");

const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const unblockUser = await User.findByIdAndUpdate(
      { _id: id },
      {
        isBlocked: false,
      },
      { new: true }
    );
    res.json({
      message: "User UnBlocked",
    });
  } catch (err) {}
});

module.exports = unblockUser;
