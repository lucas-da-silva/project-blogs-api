const { postService } = require('../services');
const { mapError } = require('../utils/errorMap');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const { type, message } = await postService.create(
    title,
    content,
    id,
    categoryIds,
  );
  if (type) return res.status(mapError(type)).json({ message });
  return res.status(201).json(message);
};

const getAll = async (_req, res) => {
  const posts = await postService.getAll();
  return res.status(200).json(posts);
};

module.exports = {
  create,
  getAll,
};
