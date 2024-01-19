const mongoose = require("mongoose");

const prodcategorySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("PCategory", prodcategorySchema);
