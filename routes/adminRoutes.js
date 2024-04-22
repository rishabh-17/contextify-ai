const express = require("express");
const { AuthMiddleware } = require("../middlewares");
const { adminController } = require("../controllers");
const router = express.Router();

// router.post("/contextify", contextController.getContext);
// router.post("/save", contextController.saveContext);
router.get('/users', AuthMiddleware.userAuthentication, adminController.getUsers )
router.get('/apihistory', AuthMiddleware.userAuthentication, adminController.getApiHistory )
module.exports = router;
