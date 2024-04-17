const jwt = require("jsonwebtoken");
const { User, Premium } = require("../models");

exports.userAuthentication = (req, res, next) => {
  try {
    const token = req.header("authentication");
    const user = jwt.verify(token, process.env.SECRET);
    User.findById(user._id).then((user) => {
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
    Premium.findOne({ Key: token }).then((premium) => {
      if (!premium) {
        return res
          .status(401)
          .json({ success: false, msg: "invalid premium key" });
      } else if (premium.expiry < Date.now()) {
        return res
          .status(401)
          .json({ success: false, msg: "premium key expired" });
      } else if (premium.usage >= premium.totalReq) {
        return res
          .status(401)
          .json({ success: false, msg: "premium key usage limit reached" });
      } else {
        req.user = premium.user
        next();
      }
    });
  } catch (error) {
    return res.status(401).json({ success: false, msg: "invalid token" });
  }
};
