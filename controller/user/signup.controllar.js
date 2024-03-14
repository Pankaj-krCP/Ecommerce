const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const mobile = req.body.mobile;
  const findUser = await User.findOne({ email: email });
  const findUserByMobile = await User.findOne({ mobile: mobile });
  if (!findUser && !findUserByMobile) {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    if (findUser) {
      throw new Error("Email Already Exists");
    } else {
      throw new Error("Mobile Already Exists");
    }
  }
});

module.exports = createUser;
