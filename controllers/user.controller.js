const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const stripe = require("stripe")(process.env.STRIPE_API);

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
    const gtoken = req.body.gtoken;

    const user = await User.findOne({ email: email });
    //  need to add more security check in future
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
      } else {
        bcrypt
          .compare(password, user.password)
          .then((e) => {
            console.log(e);
            if (!e) {
              res.json({ err: "Enter correct password", success: false });
            }

            if (e) {
              if (user.premiumType === "admin") {
                res.json({
                  msg: "login successful",
                  login: true,
                  user,
                  authToken: getAccessToken(
                    user.id,
                    user.name,
                    user.premiumType,
                    user.email
                  ),
                });
              } else {
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
            }
          })
          .catch((err) => {
            res.json({ err: "Error logging in", success: false, err });
          });
      }
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

exports.update = async (req, res) => {
  try {
    const id = req.user._id;
    const { firstName, lastName, phone, state, city, imgUrl } = req.body;
    const user = await User.findById(id);
    if (firstName && lastName) {
      user.name = firstName + " " + lastName;
    }

    if (phone) {
      user.phone = phone;
    }
    if (state) {
      user.state = state;
    }
    if (city) {
      user.city = city;
    }
    if (imgUrl) {
      user.imgUrl = imgUrl;
    }
    await user.save();
    res.json({ success: true, user, msg: "profile updated successfully" });
  } catch (error) {
    console.log(error);
  }
};

exports.makePayment = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: 200,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `http://localhost:5173/dashboard`,
      cancel_url: "http://localhost:5173/subscription",
    });
    res.json({ url: session.url });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
};
