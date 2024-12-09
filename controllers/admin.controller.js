const { User, Saved, History } = require("../models");
const nodemailer = require("nodemailer");
const path = require("path");
const Files = require("../models/Files");

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  secure: true,
  port: 465,
  auth: {
    user: "support@contextify.info",
    pass: "OperationLIFE!2",
  },
});

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password -secretKey").exec();
    return res.json({ success: true, data: users });
  } catch (error) {
    return res.json({ success: false, err: "Unable to fetch users" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    return res.json({ success: true, msg: "User deleted successfully" });
  } catch (error) {
    return res.json({ success: false, err: "Unable to delete user" });
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
      return res.status(400).json({ err: "Invalid updates!" });
    }

    const user = await User.findById(userId);

    updates.forEach((update) => (user[update] = req.body[update]));

    await user.save();

    return res.json({ success: true, data: user });
  } catch (error) {
    return res.json({ success: false, err: "Unable to update user" });
  }
};

exports.getApiHistory = async (req, res) => {
  try {
    const history = await History.find();
    return res.json({ success: true, data: history });
  } catch (error) {
    return res.json({ success: false, err: "Unable to fetch history" });
  }
};

exports.deleteApiHistory = async (req, res) => {
  try {
    const historyId = req.params.id;
    await History.findByIdAndDelete(historyId);
    return res.json({ success: true, msg: "Api history deleted successfully" });
  } catch (error) {
    return res.json({ success: false, err: "Unable to delete api history" });
  }
};

exports.getDashboard = async (req, res) => {
  try {
    const users = await User.countDocuments();
    const saved = await Saved.countDocuments();
    const history = await History.countDocuments();
    const premiumUsers = await User.countDocuments({ isPremiumUser: true });
    const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const endDate = new Date();
    const pipeline = [
      {
        $match: {
          createdAt: {
            $gte: startDate,
            $lt: endDate,
          },
        },
      },
      {
        $group: {
          _id: {
            $dayOfYear: "$createdAt",
          },
          count: { $sum: 1 },
        },
      },
    ];
    const data = await History.aggregate(pipeline);
    const chart = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: data.map((d) => {
            const date = new Date(0);
            date.setFullYear(1970, 0, d._id);
            return `${date.toLocaleDateString("en-US", {
              month: "short",
            })} ${date.getDate()}`;
          }),
        },
      },
      series: [
        {
          name: "series-1",
          data: data.map((d) => d.count),
        },
      ],
    };
    return res.json({
      success: true,
      data: { users, saved, history, premiumUsers, chart },
    });
  } catch (error) {
    return res.json({ success: false, err: "Unable to fetch dashboard" });
  }
};

exports.sendEmail = async (req, res) => {
  const { emails, subject, message } = req.body;
  try {
    const result = await emails.map(async (email) => {
      return await transporter.sendMail({
        from: "support@contextify.info",
        to: email,
        subject: subject,
        html: message,
      });
    });
    return res.json({ success: true, result });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, err: "Unable to send email" });
  }
};

exports.addFile = async (req, res) => {
  const file = req.file;
  try {
    const fileObj = new Files({
      name: file.originalname,
      url: file.filename,
    });
    await fileObj.save();
    return res.json({
      success: true,
      data: fileObj,
      msg: "File uploaded successfully",
    });
  } catch (error) {
    return res.json({ success: false, err: "Unable to upload file" });
  }
};

exports.getFiles = async (req, res) => {
  try {
    const files = await Files.find();
    return res.json({ success: true, data: files });
  } catch (error) {
    return res.json({ success: false, err: "Unable to fetch files" });
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const fileId = req.params.id;
    await Files.findByIdAndDelete(fileId);
    return res.json({ success: true, msg: "File deleted successfully" });
  } catch (error) {
    return res.json({ success: false, err: "Unable to delete file" });
  }
};
