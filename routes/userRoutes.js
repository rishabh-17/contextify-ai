const express = require("express");

const { userController } = require("../controllers");
const { AuthMiddleware } = require("../middlewares");
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

module.exports = router;
