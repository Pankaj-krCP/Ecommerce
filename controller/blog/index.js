const createBlog = require("./createblog.controllar");
const updateBlog = require("./updateblog.controllar");
const getBlog = require("./getblog.controllar");
const getAllBlogs = require("./getallblogs.controllar");
const deleteBlog = require("./deleteblog.controllar");
const likeBlog = require("./likeblog.controllar");
const dislikeBlog = require("./dislikeblog.controllar");
const addImages = require("./addimages.controllar");
const removeImages = require("./removeimages.controllar");

module.exports = {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  addImages,
  removeImages,
};
