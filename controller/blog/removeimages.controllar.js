const Blog = require("../../models/blogModel");
const asyncHandler = require("express-async-handler");

const removeImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { public_id } = req.body;
  const blog = await Blog.findById(id);
  const imageToDelete = blog?.images?.find(
    (item) => item.public_id.toString() === public_id.toString()
  );
  if (imageToDelete) {
    const blog = await Blog.findByIdAndUpdate(
      id,
      {
        $pull: { images: imageToDelete },
      },
      { new: true }
    );
    res.json(blog);
  } else {
    throw new Error("Image not Exist");
  }
});

module.exports = removeImages;
