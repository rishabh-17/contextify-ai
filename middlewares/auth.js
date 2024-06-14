const jwt = require("jsonwebtoken");
const { User, Premium } = require("../models");

exports.userAuthentication = (req, res, next) => {
  try {
    const token = req.header("authentication");
    const user = jwt.verify(token, process.env.SECRET);
    User.findById(user?._id).then((user) => {
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(401).json({ success: false });
  }
};

exports.secretKeyValidation = (req, res, next) => {
  try {
    const token = req.header("secret");
    if (token === "undefined") {
      console.log(token);
      return res.status(401).json({
        success: false,
        err: "To access this feature, click on the puzzle piece icon in the Chrome toolbar and select the Contextify icon to provide your secret key.",
      });
    }
    User.findOne({ secretKey: token }).then((user) => {
      if (!user) {
        return res.status(401).json({ success: false, err: "invalid user" });
      } else {
        req.user = user;
        next();
      }
    });
  } catch (error) {
    return res.status(401).json({ success: false, err: "invalid token" });
  }
};

exports.checkAdmin = (req, res, next) => {
  if (req.user?.premiumType === "admin") {
    next();
  } else {
    res.status(401).json({ success: false, err: "Unauthorized access" });
  }
};

exports.checkRequestLimit = (req, res, next) => {
  console.log("working");
  if (req.user?.totalReq <= 0) {
    res.status(401).json({ success: false, err: "Request limit exceeded" });
  } else {
    next();
  }
};
