const express = require("express");

const { contextController } = require("../controllers");
const { AuthMiddleware } = require("../middlewares");
const router = express.Router();

router.post(
  "/contextify",
  AuthMiddleware.checkRequestLimit,
  contextController.getContext
);
router.post(
  "/save",
  AuthMiddleware.checkRequestLimit,
  contextController.saveContext
);
module.exports = router;
