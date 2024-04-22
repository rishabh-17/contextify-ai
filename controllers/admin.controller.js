const { User, Saved, History } = require("../models");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password -secretKey").exec();
    return res.json({ success: true, data: users });
  } catch (error) {
    return res.json({ success: false, error: "Unable to fetch users" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    return res.json({ success: true, msg: "User deleted successfully" });
  } catch (error) {
    return res.json({ success: false, error: "Unable to delete user" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "email", "isPremiumUser"];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
      return res.status(400).json({ error: "Invalid updates!" });
    }

    const user = await User.findById(userId);

    updates.forEach((update) => (user[update] = req.body[update]));

    await user.save();

    return res.json({ success: true, data: user });
  } catch (error) {
    return res.json({ success: false, error: "Unable to update user" });
  }
};

exports.getApiHistory = async (req, res) => {
  try {
    const history = await History.find();
    return res.json({ success: true, data: history });
  } catch (error) {
    return res.json({ success: false, error: "Unable to fetch history" });
  }
};

exports.deleteApiHistory = async (req, res) => {
  try {
    const historyId = req.params.id;
    await History.findByIdAndDelete(historyId);
    return res.json({ success: true, msg: "Api history deleted successfully" });
  } catch (error) {
    return res.json({ success: false, error: "Unable to delete api history" });
  }
};
