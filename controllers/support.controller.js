const Support = require("../models/Support.js");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_PUBLIC_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

exports.getAllsupport = async (req, res) => {
  try {
    const category = req.query.category ? { category: req.query.category } : {};
    console.log(category);
    const supports = await Support.find(category).select(["-createdAt"]);
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
    // const result = await cloudinary.uploader.upload(req.body.thumbnail);
    const newSupport = new Support({
      content: req.body.support,
      category: req.body.category,
      title: req.body.title,
    });
    await newSupport.save();
    res.status(201).json({ success: true, data: newSupport });
  } catch (err) {
    console.log(err);
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
    console.log(error);
    res.json({ success: false });
  }
};

exports.updatesupport = async (req, res) => {
  try {
    const newSupport = new Support({
      _id: req.params.id,
      content: req.body.support,
      category: req.body.category,
      title: req.body.title,
    });
    const support = await Support.findByIdAndUpdate(req.params.id, newSupport);
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
