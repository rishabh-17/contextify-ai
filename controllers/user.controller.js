const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const userCheck = await User.findOne({ email: email });
    if (userCheck) {
      res.json({ msg: "email already exist", success: false });
    } else {
      const hashed = await bcrypt.hash(password, 10);
      const user = new User({
        name: name,
        email: email,
        password: hashed,
      });
      await user.save();
      res.json({ msg: "signup Successful", success: true, user });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const google = req.body.google;

    const user = await User.findOne({ email: email });
    //  need to add more sequrity cheaks in future
    if (user) {
      if (google) {
        res.json({
          msg: "login successful",
          login: true,
          user,
          token: getAccessToken(
            user.id,
            user.name,
            user.isPremiumUser,
            user.email
          ),
        });
      }
      bcrypt
        .compare(password, user.password)
        .then((e) => {
          console.log(e);

          if (e) {
            res.json({
              msg: "login successful",
              login: true,
              user,
              token: getAccessToken(
                user.id,
                user.name,
                user.isPremiumUser,
                user.email
              ),
            });
          } else {
            res.json({ err: "Enter correct password", success: false });
          }
        })
        .catch((err) => {
          res.json({ err: "Error logging in", success: false, err });
        });
    } else {
      res.json({ err: "user not found", success: false });
    }
  } catch (error) {
    console.log("login error", error);
  }
};

function getAccessToken(id, name, isPremiumUser, email) {
  return jwt.sign(
    { _id: id, name: name, isPremiumUser: isPremiumUser, email: email },
    process.env.SECRET
  );
}

exports.genrateKey = async (req, res) => {
  try {
    const id = req.user._id;
    const { validity, plan } = req.body;
    const user = await User.findById(id);
    user.secretKey = user.password;
    await user.save();
    res.json({ key: user.password });
  } catch (error) {
    console.log(error);
  }
};
