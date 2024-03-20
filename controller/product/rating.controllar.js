const Product = require("../../models/productModel");
const User = require("../../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, prodId, comment } = req.body;
  try {
    const user = await User.findById(_id);
    const product = await Product.findById(prodId);
    const alreadyRated = await product.ratings.find(
      (userId) => userId.postedby.toString() === _id.toString()
    );
    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: { "ratings.$.star": star, "ratings.$.comment": comment },
        },
        {
          new: true,
        }
      );
    } else {
      const rateProduct = await Product.findByIdAndUpdate(prodId, {
        $push: {
          ratings: {
            star: star,
            comment: comment,
            postedby: _id,
            username: user.firstName + " " + user.lastName,
          },
        },
      });
    }
    const getallratings = await Product.findById(prodId);
    let totalRating = getallratings.ratings.length;
    let ratingsum = getallratings.ratings
      .map((item) => item.star)
      .reduce((prev, curr) => prev + curr, 0);
    let actualrating = ratingsum / totalRating;
    const finalProduct = await Product.findByIdAndUpdate(
      prodId,
      {
        totalrating: actualrating,
      },
      { new: true }
    );
    res.json(finalProduct);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = rating;
