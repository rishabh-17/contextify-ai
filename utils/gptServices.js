const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const explain = async (text) => {
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
        return { success: true, data: data };
      })
      .catch((err) => {
        return { success: false, error: err };
      });
  }

  return { success: false, error: "Text is empty" };
};

const explainImage = async (imageUrl) => {
  if (image?.length > 0) {
    const prompt = {
      role: "user",
      content: "explain this image to me" + imageUrl,
    };

    openai.chat.completions
      .create({
        model: "gpt-4",
        messages: [prompt],
      })
      .then((data) => {
        return { success: true, data: data };
      })
      .catch((err) => {
        return { success: false, error: err };
      });
  }

  return { success: false, error: "Unable to get image" };
};

exports.module = { explain, explainImage };
