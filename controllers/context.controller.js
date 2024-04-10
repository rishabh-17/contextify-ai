const gpt = require("../utils/gptServices.js");

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
        res.json({ success: true, data: data });
      })
      .catch((err) => {
        console.log(err);
        res.json({ success: false, error: err });
      });
  }
  // const data = await explain(req.body.text);
  // res.json({ data });
};
