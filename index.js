const express = require('express');
const https = require("https");
const path = require("path");
const cors = require('cors');
const app = express();

app.use(express.json);
app.use(cors());


/* app.use("/", (req, res) => {
  console.log(req.url === "/");
  res.sendFile(
    path.join(__dirname, `client/build/${req.url !== "/" ? req.url : "index.html"}`)
  );
});
*/

app.listen(process.env.PORT || 8000)
