const express = require("express");

const { contextController } = require("../controllers");
const router = express.Router();

router.post("/contextify", contextController.getContext);

module.exports = router;
