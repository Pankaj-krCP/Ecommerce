const createProduct = require("./createproduct.controllar");
const updateProduct = require("./updateproduct.controllar");
const deleteProduct = require("./deleteproduct.controllar");
const getaProduct = require("./getaproduct.controllar");
const getAllProduct = require("./getallproduct.controllar");
const filterProduct = require("./filterproduct.controllar");
const addToWishlist = require("./addtowishlist.controllar");
const rating = require("./rating.controllar");
const addImages = require("./addimages.controllar");
const removeImages = require("./removeimages.controllar");

module.exports = {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  filterProduct,
  deleteProduct,
  addToWishlist,
  rating,
  addImages,
  removeImages,
};
