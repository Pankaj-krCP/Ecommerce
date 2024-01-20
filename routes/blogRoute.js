const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  removeImages,
  addImages,
} = require("../controller/blogControllar");

const {
  uploadPhoto,
  blogImgResize,
} = require("../middlewares/multerUploadImages");

const {
  uploadImages,
  deleteImages,
} = require("../middlewares/cloudinaryUploadImages");

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBlog);
router.get("/", getAllBlogs);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  blogImgResize,
  uploadImages,
  addImages
);
router.delete(
  "/delete/:id",
  authMiddleware,
  isAdmin,
  deleteImages,
  removeImages
);
router.put("/likes", authMiddleware, isAdmin, likeBlog);
router.put("/dislikes", authMiddleware, isAdmin, dislikeBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.get("/:id", getBlog);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;
