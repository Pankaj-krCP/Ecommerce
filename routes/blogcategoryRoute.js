const express = require("express");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getaCategory,
  getAllCategory,
} = require("../controller/blogcategory/index");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCategory);
router.put("/:id", authMiddleware, isAdmin, updateCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteCategory);
router.get("/:id", getaCategory);
router.get("/", getAllCategory);

module.exports = router;
