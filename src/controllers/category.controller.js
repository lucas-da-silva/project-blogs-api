const { categoryService } = require('../services');

const create = async (req, res) => {
  const { name } = req.body;
  const category = await categoryService.create(name);
  return res.status(201).json(category);
};

const getAll = async (_req, res) => {
  const categories = await categoryService.getAll();
  return res.status(200).json(categories);
};

module.exports = {
  create,
  getAll,
};
