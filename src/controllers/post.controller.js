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

module.exports = {
  create,
};
