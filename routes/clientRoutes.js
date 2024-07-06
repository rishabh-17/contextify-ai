const express = require("express");
const { AuthMiddleware, secretKeyValidation } = require("../middlewares");
const { clientController } = require("../controllers");

const router = express.Router();

router.get(
  "/saved",
  AuthMiddleware.userAuthentication,
  clientController.getSaved
);
router.get("/saved/:id", clientController.getOneSaved);
router.delete(
  "/saved/:id",
  AuthMiddleware.userAuthentication,
  clientController.deleteSaved
);
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

router.get(
  "/feedback",
  AuthMiddleware.userAuthentication,
  clientController.getFeedback
);
router.post(
  "/feedback",
  AuthMiddleware.userAuthentication,
  clientController.postFeedback
);
router.post(
  "/feedback/extension",
  AuthMiddleware.secretKeyValidation,
  clientController.postFeedback
);
module.exports = router;
