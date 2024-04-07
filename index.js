const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

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

app.listen(8000, () => console.log("Server started on port 8000"));
