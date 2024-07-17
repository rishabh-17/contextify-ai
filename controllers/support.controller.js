const Support = require("../models/Support.js");

exports.getAllsupport = async (req, res) => {
  try {
    const supports = await Support.find({}).select(["-createdAt"]);
    res.status(200).json({ success: true, data: supports });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Fetching supports failed, please try again",
    });
  }
};

exports.createsupport = async (req, res) => {
  try {
    console.log(req.body, req.files);
    const newSupport = new Support({
      content: req.body.content,
      thumbnail: req.body.thumbnail,
      title: req.body.title,
    });
    await newSupport.save();
    res.status(201).json({ success: true, data: newSupport });
  } catch (err) {
    // console.error(err);
    res.status(500).json({
      success: false,
      message: "Unable to create a support, please try again",
    });
  }
};

exports.getsupport = async (req, res) => {
  try {
    const support = await Support.findById(req.params.id);
    if (!support) {
      return res
        .status(404)
        .json({ success: false, message: "Support not found" });
    }
    res.json(support);
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};

exports.deletesupport = async (req, res) => {
  try {
    const support = await Support.findByIdAndDelete(req.params.id);
    if (!support) {
      return res
        .status(404)
        .json({ success: false, message: "Support not found" });
    }
    res.json(support);
  } catch (error) {
    res.json({ success: false });
  }
};
