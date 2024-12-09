const mongoose = require("mongoose");

const uri = "";
mongoose
  .connect(uri, {})
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting:", err));

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
    categories: [String],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

User.updateMany({}, { $set: { categories: [] } })
  .then((updateResult) => {
    console.log("Updated", updateResult.modifiedCount, "documents");
    mongoose.connection.close(); // Close connection after update
  })
  .catch((err) => {
    console.error("Error updating users:", err);
    mongoose.connection.close(); // Close connection on error
  });
