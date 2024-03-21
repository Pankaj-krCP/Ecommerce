const Category = require("../../models/prodcategoryModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../../utilss/validateMongodbId");

const getaCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaCategory = await Category.findById(id);
    res.json(getaCategory);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getaCategory;
