const jwt = require("jsonwebtoken");
const asyncHandler = require("./async");
const User = require("../models/User");

exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization) {
    token = req.headers.authorization;
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return res.status(400).json({
      success: false,
      msg: "no token found",
    });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decode.id);
    next();

  } catch (err) {
    return res.status(401).json({
      success: false,
      msg: "token not valid from protect",
    });
  }
});
