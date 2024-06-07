const gpt = require("../utils/gptServices.js");
const { Saved, History } = require("../models");
require("dotenv").config();
const OpenAI = require("openai");
// const api = process.env.OPENAI_API_KEY;
// console.log(api);
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.getContext = async (req, res) => {
  let { text, isImg } = req.body;
  if (!isImg) {
    if (text?.length > 0) {
      const prompt = [
        {
          role: "user",
          content: `Please provide context for the following ${text}. The context should include:
        Phrase/word highlighted: Identify and highlight the key phrase or word that requires context.
        Short paragraph of details on the subject: Provide a brief explanation or description of the highlighted phrase or word.
        Bullet point list of basic info: Include as much of the following information as applicable:
        Who: Identify the person or group associated with the subject.
        Why: Explain the reason or significance behind the subject.
        What: Describe what the subject is or what is happening.
        How: Explain the process or method involved.
        Where: Specify the location or setting relevant to the subject.
        When: Provide the time frame or period associated with the subject.`,
        },
      ];

      openai.chat.completions
        .create({
          model: "gpt-4-turbo",
          messages: prompt,
        })
        .then((data) => {
          // console.log("data");
          // console.log(data?.choices?.[0].message);
          const newHistory = new History({
            question: text,
            answer: data?.choices?.[0]?.message?.content.replace(/[\/\*]/g, ""),
            user: req.user,
          });
          newHistory.save().then((i) => {
            req.user.totalReq = req.user.totalReq - 1;
            req.user.usage = req.user.usage + 1;
            req.user.save();
            res.json({
              success: true,
              data: data?.choices?.[0]?.message?.content.replace(/[\/\*]/g, ""),
            });
          });
        })
        .catch((err) => {
          console.log(err);
          // res.json({
          //   success: true,
          //   data: "temp solution until new api lorem By default, Tailwinds width scale is a combination of the default spacing scale as well as some additional values specific to widths.You can customize your spacing scale by editing theme.spacing or theme.extend.spacing in your tailwind.config.js file.",
          // });
          res.status(500).json({ success: false, err: err });
        });
    }
  } else {
    openai.chat.completions
      .create({
        model: "gpt-4o",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `Please provide context for the following image. The context should include:
        Phrase/word highlighted: Identify and highlight the key phrase or word that requires context.
        Short paragraph of details on the subject: Provide a brief explanation or description of the highlighted phrase or word.
        Bullet point list of basic info: Include as much of the following information as applicable:
        Who: Identify the person or group associated with the subject.
        Why: Explain the reason or significance behind the subject.
        What: Describe what the subject is or what is happening.
        How: Explain the process or method involved.
        Where: Specify the location or setting relevant to the subject.
        When: Provide the time frame or period associated with the subject`,
              },
              {
                type: "image_url",
                image_url: {
                  url: text,
                },
              },
            ],
          },
        ],
      })
      .then((data) => {
        // console.log("data");
        // console.log(data?.choices?.[0].message);
        const newHistory = new History({
          question: text,
          answer: data?.choices?.[0]?.message?.content.replace(/[\/\*]/g, ""),
          user: req.user,
        });
        newHistory.save().then((i) => {
          req.user.totalReq = req.user.totalReq - 1;
          req.user.usage = req.user.usage + 1;
          req.user.save();
          res.json({
            success: true,
            data: data?.choices?.[0]?.message?.content.replace(/[\/\*]/g, ""),
          });
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ success: false, err: err });
      });
  }
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
