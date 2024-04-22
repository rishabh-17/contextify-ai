const express = require("express");
const path = require("path");
const cors = require("cors");
const { contextRoutes, userRoutes,clientRoutes, adminRoutes } = require("./routes");
const { AuthMiddleware } = require("./middlewares");
const { connectDB } = require("./utils");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use(express.static(__dirname + "/client/build"));

app.get("/", (req, res) => {
  console.log("working");
  console.log(`client/build/${req.url !== "/" ? req.url : "index.html"}`);
  res.sendFile(
    path.join(
      __dirname,
      `client/build/${req.url !== "/" ? req.url : "index.html"}`
    )
  );
});

app.use("/api/context", AuthMiddleware.secretKeyValidation, contextRoutes);
app.use("/api/user", userRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/admin", adminRoutes);

app.listen(8000, () => connectDB(process.env.MONGO_URI));
