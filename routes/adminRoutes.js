const express = require("express");
const { AuthMiddleware } = require("../middlewares");
const { adminController } = require("../controllers");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../cloud"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const router = express.Router();

router.get(
  "/info",
  AuthMiddleware.userAuthentication,
  adminController.getDashboard
);

router.get(
  "/users",
  AuthMiddleware.userAuthentication,
  adminController.getUsers
);

router.get(
  "/apihistory",
  AuthMiddleware.userAuthentication,
  adminController.getApiHistory
);

router.delete(
  "/user/:id",
  AuthMiddleware.userAuthentication,
  adminController.deleteUser
);

router.post("/email", adminController.sendEmail);

router.post("/addfile", upload.single("file"), adminController.addFile);

router.get("/files", adminController.getFiles);

router.delete("/file/:id", adminController.deleteFile);

module.exports = router;
