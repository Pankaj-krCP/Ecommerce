const Color = require("../../models/colorModel");
const asyncHandler = require("express-async-handler");

const getallColor = asyncHandler(async (req, res) => {
  try {
    const getallColor = await Color.find();
    res.json(getallColor);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getallColor;
