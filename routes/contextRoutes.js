const express = require("express");

const { contextController } = require("../controllers");
const router = express.Router();

router.post("/", contextController.test);

module.exports = router;
