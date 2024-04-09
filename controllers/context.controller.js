const { explain } = require("../utils/gptServices");

exports.getContext = async (req, res) => {
  const data = await explain(req.body.text);
  res.json(data);
};
