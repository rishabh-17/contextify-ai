const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"],
    },
    password: {
      type: String,
      minlength: 8,
      required: true,
    },
    isPremiumUser: {
      type: Boolean,
      default: false,
    },
    freeTrialValidity: {
      type: String,
      select: false,
    },
    secretKey: {
      type: String,
      trim: true,
    },
    expiry: {
      type: Date,
    },
    usage: {
      type: Number,
      default: 0,
    },
    totalReq: {
      type: Number,
      default: 15,
    },
    premiumType: {
      type: String,
      default: "free",
    },
    imgUrl: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
