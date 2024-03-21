const Brand = require("../../models/brandModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../../utilss/validateMongodbId");

const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedBrand);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = updateBrand;
