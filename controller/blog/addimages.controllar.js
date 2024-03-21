const Blog = require("../../models/blogModel");
const asyncHandler = require("express-async-handler");

const addImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const images = req.images;
  try {
    const blog = await Blog.findByIdAndUpdate(
      id,
      {
        $push: { images: { $each: images } },
      },
      { new: true }
    );
    res.json(blog);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = addImages;
