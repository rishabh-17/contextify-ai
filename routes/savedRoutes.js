const router = require("express").Router();
const { savedController } = require("../controllers");
const { AuthMiddleware } = require("./middlewares");

router.get(
  "/getSaved",
  AuthMiddleware.userAuthentication,
  savedController.getSaved
);
router.post(
  "/addSaved",
  AuthMiddleware.secretKeyValidation,
  savedController.addSaved
);
router.put(
  "/editSaved",
  AuthMiddleware.userAuthentication,
  savedController.editSaved
);
router.delete(
  "/deleteSaved/:id",
  AuthMiddleware.userAuthentication,
  savedController.deleteSaved
);
router.get(
  "/getOne/:id",
  AuthMiddleware.userAuthentication,
  savedController.getOne
);

module.exports = router;
