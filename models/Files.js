const mongoose = require("mongoose");

const FilesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    url: {
      type: String,
      trim: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Files = mongoose.model("Files", FilesSchema);

module.exports = Files;
