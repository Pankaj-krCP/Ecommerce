const Enquiry = require("../../models/enqModel");
const asyncHandler = require("express-async-handler");

const getallEnquiry = asyncHandler(async (req, res) => {
  try {
    const getallEnquiry = await Enquiry.find();
    res.json(getallEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = getallEnquiry;
