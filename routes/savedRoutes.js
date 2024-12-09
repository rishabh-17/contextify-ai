const router = require("express").Router();
const { savedController } = require("../controllers");
const { AuthMiddleware } = require("../middlewares");

router.get(
  "/getsaved",
  AuthMiddleware.userAuthentication,
  savedController.getSaved
);
router.post(
  "/addsaved",
  AuthMiddleware.secretKeyValidation,
  savedController.addSaved
);
router.put(
  "/editsaved",
  AuthMiddleware.userAuthentication,
  savedController.editSaved
);
router.delete(
  "/deletesaved/:id",
  AuthMiddleware.userAuthentication,
  savedController.deleteSaved
);
router.get(
  "/getOne/:id",
  AuthMiddleware.userAuthentication,
  savedController.getOne
);

module.exports = router;
