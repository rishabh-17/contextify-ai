const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Payment = require("../models/Payment");
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
      res.json({ err: "User not found", success: false });
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

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.user._id;
    await User.findByIdAndDelete(userId);
    return res.json({ success: true, msg: "User deleted successfully" });
  } catch (error) {
    return res.json({ success: false, err: "Unable to delete user" });
  }
};

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
      success_url: `http://localhost:5173/subscription/?session_id={CHECKOUT_SESSION_ID}&user_id=3433&tokens=${req.body.items[0].quantity}`,
      cancel_url: "http://localhost:5173/subscription",
    });
    // console.log(session);
    res.json({ url: session.url, session });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id);
    res.json({ success: true, categories: user.categories });
  } catch (error) {
    res.json({ success: false, msg: "something went wrong" });
  }
};

exports.addCategory = async (req, res) => {
  try {
    const id = req.user._id;
    const { category } = req.body;
    const user = await User.findById(id);
    user.categories.push(category);
    await user.save();
    res.json({ success: true, msg: "category added successfully" });
  } catch (error) {
    res.json({ success: false, msg: "something went wrong" });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const id = req.user._id;
    const { category } = req.body;
    const user = await User.findById(id);
    user.categories = user.categories.filter((c) => c !== category);
    await user.save();
    res.json({ success: true, msg: "category deleted successfully" });
  } catch (error) {
    res.json({ success: false, msg: "something went wrong" });
  }
};

exports.paymentSuccess = async (req, res) => {
  const { sessionId, tokens } = req.body;
  try {
    const sessionData = await stripe.checkout.sessions.retrieve(sessionId);

    if (!sessionData) {
      return res.status(404).send({ error: "Session not found" });
    }
    const isRedeemed = await Payment.find({ session: sessionId });
    console.log(isRedeemed);
    if (isRedeemed.length > 1) {
      return res.status(400).send({ error: "Already redeemed" });
    }
    const newSession = new Payment({
      session: sessionId,
      user: req.user._id,
      tokenQuantity: req.body.tokens,
    });
    await newSession.save();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const user = req.user;
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    user.totalReq += tokens;
    await user.save();

    res.send({ success: true });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
