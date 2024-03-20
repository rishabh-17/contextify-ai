const express = require("express");

const { premiumController } = require("../controllers");
const router = express.Router();

router.post("/", premiumController.test);

module.exports = router;
