const Brand = require("../../models/brandModel");
const asyncHandler = require("express-async-handler");

const getallBrand = asyncHandler(async (req, res) => {
  try {
    const getallBrand = await Brand.find();
    res.json(getallBrand);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getallBrand;
