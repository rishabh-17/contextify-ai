const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_API);
const { userController } = require("../controllers");
const { AuthMiddleware } = require("../middlewares");
const { User } = require("../models");
const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post(
  "/generatekey",
  AuthMiddleware.userAuthentication,
  userController.genrateKey
);
router.put("/update", AuthMiddleware.userAuthentication, userController.update);
router.post("/create-checkout-session", userController.makePayment);

router.get(
  "/categories",
  AuthMiddleware.userAuthentication,
  userController.getCategories
);
router.post(
  "/categories",
  AuthMiddleware.userAuthentication,
  userController.addCategory
);
router.post(
  "/categories/delete",
  AuthMiddleware.userAuthentication,
  userController.deleteCategory
);

router.post("/create-payment-intent", async (req, res) => {
  const { amount, userId } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
      userId,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.post(
  "/payment-success",
  AuthMiddleware.userAuthentication,
  userController.paymentSuccess
);

module.exports = router;
