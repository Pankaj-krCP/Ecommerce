const fs = require("fs");
const asyncHandler = require("express-async-handler");

const {
  cloudinaryUploadImg,
  cloudinaryDeleteImg,
} = require("../utils/cloudinary");

const uploadImages = asyncHandler(async (req, res, next) => {
  try {
    const uploader = (path) => cloudinaryUploadImg(path, "images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newpath = await uploader(path);
      urls.push(newpath);
      fs.unlinkSync(path);
    }
    const images = urls.map((file) => {
      return file;
    });
    req.images = images;
  } catch (error) {
    throw new Error(error);
  }
  next();
});

const deleteImages = asyncHandler(async (req, res, next) => {
  const { public_id } = req.body;
  try {
    const deleted = cloudinaryDeleteImg(public_id, "images");
  } catch (error) {
    throw new Error(error);
  }
  next();
});

module.exports = {
  uploadImages,
  deleteImages,
};
