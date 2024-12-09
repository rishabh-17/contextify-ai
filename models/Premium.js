const mongoose = require("mongoose");

const PremiumSchema = new mongoose.Schema(
  {
    Key: {
      type: String,
      trim: true,
      required: true,
    },
    expiry: {
      type: Date,
      required: true,
    },
    usage: {
      type: String,
      required: true,
    },
    totalReq: {
      type: Number,
      required: true,
      default: 0,
    },
    premiumType: {
      type: String,
      required: true,
      default: "free",
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Premium = mongoose.model("Premium", PremiumSchema);

module.exports = Premium;
