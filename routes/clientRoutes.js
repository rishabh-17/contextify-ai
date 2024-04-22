const express = require("express");
const { AuthMiddleware } = require("../middlewares");
const { clientController } = require("../controllers");

const router = express.Router();

router.get('/saved', AuthMiddleware.userAuthentication, clientController.getSaved )
router.get('/history', AuthMiddleware.userAuthentication, clientController.getHistory )
module.exports = router;
