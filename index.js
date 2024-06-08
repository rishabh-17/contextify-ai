const express = require("express");
const path = require("path");
const cors = require("cors");
const {
  contextRoutes,
  userRoutes,
  clientRoutes,
  adminRoutes,
  savedRoutes,
} = require("./routes");
const { AuthMiddleware } = require("./middlewares");
const { connectDB } = require("./utils");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use(express.static(__dirname + "/client/build"));

app.use("/api/context", AuthMiddleware.secretKeyValidation, contextRoutes);
app.use("/api/user", userRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/saved", savedRoutes);

app.get("*", (req, res) => {
  if (req.url.startsWith("/api")) {
    res.status(404).json({ error: "Not found" });
  } else {
    const filePath = path.join(__dirname, "client/build", "index.html");
    res.sendFile(filePath, (err) => {
      if (err) {
        res.status(404).json({ error: "Not found" });
      }
    });
  }
});

app.listen(8000, () => connectDB(process.env.MONGO_URI));
