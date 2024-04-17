const express = require("express");

const { contextController } = require("../controllers");
const router = express.Router();

router.post("/contextify", contextController.getContext);
router.post("/save", contextController.saveContext);
module.exports = router;
