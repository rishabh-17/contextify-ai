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

const Payment = mongoose.model("Payment", PremiumSchema);

module.exports = Payment;
