const mongoose = require("mongoose");
/* The code is defining a Mongoose schema for a support. The schema specifies the structure and data types
of a support object in a MongoDB collection. */

const supportSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String
  }
});

const support = mongoose.model("Support", supportSchema);

module.exports = support;
