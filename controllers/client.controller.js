const { User, Saved, History } = require("../models");

exports.getSaved = async (req, res) => {
  try {
    const saved = await Saved.find({ user: req.user._id });
    res.json({ success: true, data: saved });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: "unable to get saved" });
  }
};

exports.getOneSaved = async (req, res) => {
  try {
    const id = req.params.id;
    const saved = await Saved.findOne({ _id: id, user: req.user._id });
    res.json({ success: true, data: saved });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: "unable to get saved" });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const history = await History.find({ user: req.user._id });
    res.json({ success: true, data: history });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: "unable to get history" });
  }
};

exports.getOneHistory = async (req, res) => {
  try {
    const id = req.params.id;
    const history = await History.findOne({ _id: id, user: req.user._id });
    res.json({ success: true, data: history });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: "unable to get history" });
  }
};

exports.deleteSaved = async (req, res) => {
  try {
    const id = req.params.id;
    Saved.deleteOne({ _id: id, user: req.user._id }).then((i) => {
      res.json({ success: true, saved: i });
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: "unable to delete saved" });
  }
};

exports.updateSaved = async (req, res) => {
  try {
    const id = req.params.id;
    const { question, answer } = req.body;

    Saved.findOne({ _id: id, user: req.user._id }).then((saved) => {
      if (saved) {
        saved.question = question;
        saved.answer = answer;
        saved.save().then((i) => {
          res.json({ success: true, saved: i });
        });
      } else {
        res.json({ success: false, error: "saved not found" });
      }
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: "unable to update saved" });
  }
};
