const { List } = require("../models/list");

const getList = async (req, res) => {
  const result = await List.find();
  res.status(201).json(result);
};

module.exports = {
  getList: getList,
};
