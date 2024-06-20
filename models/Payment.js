const mongoose = require("mongoose");

const PremiumSchema = new mongoose.Schema(
  {
    tokenQuantity: {
      type: Number,
      required: true,
    },
    session: {
      type: String,
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Premium = mongoose.model("Premium", PremiumSchema);

module.exports = Premium;
