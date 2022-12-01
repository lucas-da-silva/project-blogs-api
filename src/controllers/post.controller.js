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

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await postService.getById(id);
  if (type) return res.status(mapError(type)).json({ message });
  return res.status(200).json(message);
};

const update = async (req, res) => {
  const {
    body: { title, content },
    params: { id },
    user: { id: tokenId },
  } = req;
  const { type, message } = await postService.update(
    id,
    title,
    content,
    tokenId,
  );

  if (type) return res.status(mapError(type)).json({ message });
  return res.status(200).json(message);
};

const deleteById = async (req, res) => {
  const {
    params: { id },
    user: { id: tokenId },
  } = req;
  const { type, message } = await postService.deleteById(id, tokenId);
  if (type) return res.status(mapError(type)).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteById,
};
