const { User, History, Saved } = require("../models");

exports.dashboardDetail = (req, res) => {
  const history = History.find({ user: req.user._id });
  const saved = Saved.find({ user: req.user._id });
  res.json({ sucess: true, data: { history, saved, user: req.user } });
};
