const express = require("express");

const { userController } = require("../controllers");
const { AuthMiddleware } = require("../middlewares");
const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post(
  "/generateKey",
  AuthMiddleware.userAuthentication,
  userController.genrateKey
);

module.exports = router;
