const express = require("express");
const { AuthMiddleware } = require("../middlewares");
const { clientController } = require("../controllers");

const router = express.Router();

router.get(
  "/saved",
  AuthMiddleware.userAuthentication,
  clientController.getSaved
);
router.get("/saved/:id", clientController.getOneSaved);
router.get(
  "/history",
  AuthMiddleware.userAuthentication,
  clientController.getHistory
);
router.get("/history/:id", clientController.getOneHistory);
router.get(
  "/profile",
  AuthMiddleware.userAuthentication,
  clientController.profileData
);
module.exports = router;
