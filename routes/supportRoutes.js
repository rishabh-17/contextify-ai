const express = require("express");
const supportController = require("../controllers/support.controller");
const router = express.Router();

//GET ALL POSTS
router.get("/get", supportController.getAllsupport);
router.get("/get/:id", supportController.getsupport);

//CREATE A POST AND DELETE
router.post("/create", supportController.createsupport);
router.delete("/delete/:id", supportController.deletesupport);

module.exports = router;
