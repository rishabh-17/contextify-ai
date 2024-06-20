const { Saved } = require("../models");

exports.getSaved = (req, res) => {
  try {
    Saved.find({ user: req.user._id }).then((i) => {
      res.json({ success: true, saved: i });
    });
  } catch (error) {
    res.json({ success: false, err: "unable to get saved" });
  }
};

exports.addSaved = (req, res) => {
  try {
    const newSaved = new Saved({
      question: req.body.question,
      answer: req.body.answer,
      user: req.user,
    });
    newSaved.save().then((i) => {
      res.json({
        success: true,
        msg: "Added Successfully",
      });
    });
  } catch (error) {
    res.json({ success: false, err: "unable to save" });
  }
};

exports.editSaved = (req, res) => {
  try {
    const { question, answer, id } = req.body;

    Saved.findOne({ _id: id }).then((i) => {
      i.question = question;
      i.answer = answer;
      i.save().then((i) => {
        res.json({ success: true, saved: i });
      });
    });
  } catch (error) {
    res.json({ success: false, err: "unable to save" });
  }
};

exports.deleteSaved = (req, res) => {
  try {
    const id = req.params.id;
    Saved.deleteOne({ _id: id }).then((i) => {
      res.json({ success: true, saved: i });
    });
  } catch (error) {
    res.json({ success: false, err: "unable to save" });
  }
};

exports.getOne = (req, res) => {
  try {
    const id = req.params.id;
    Saved.findOne({ _id: id }).then((i) => {
      res.json({ success: true, saved: i });
    });
  } catch (error) {
    res.json({ success: false, err: "unable to save" });
  }
};
