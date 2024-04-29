const gpt = require("../utils/gptServices.js");
const { Saved, History } = require("../models");
require("dotenv").config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.getContext = async (req, res) => {
  let { text } = req.body;
  console.log(text);
  if (text?.length > 0) {
    const prompt = [
      {
        role: "user",
        content: "explain meaning of given text " + text,
      },
    ];

    openai.chat.completions
      .create({
        model: "gpt-4",
        messages: prompt,
      })
      .then((data) => {
        console.log(data);
        const newHistory = new History({
          question: text,
          answer: data,
          user: req.user,
        });
        newHistory.save().then((i) => {
          res.json({ success: true, data: data });
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({
          success: true,
          data: "temp solution until new api lorem By default, Tailwinds width scale is a combination of the default spacing scale as well as some additional values specific to widths.You can customize your spacing scale by editing theme.spacing or theme.extend.spacing in your tailwind.config.js file.",
        });
        // res.status(500).json({ success: false, err: err });
      });
  }

  // const data = await explain(req.body.text);
  // res.json({ data });
};

exports.saveContext = async (req, res) => {
  try {
    let { question, answer, type } = req.body;

    const newSaved = new Saved({
      question,
      answer,
      type,
      user: req.user,
    });

    newSaved.save().then((i) => {
      res.json({ success: true, msg: "saved successfully" });
    });
  } catch (error) {
    res.json({ success: false, err: "unable to save" });
  }
};
