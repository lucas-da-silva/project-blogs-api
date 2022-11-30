const userService = require('../services/user.service');
const { mapError } = require('../utils/errorMap');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, message } = await userService.create(
    displayName,
    email,
    password,
    image || null,
  );
  if (type) return res.status(mapError(type)).json({ message });
  return res.status(201).json(message);
};

const getAll = async (_req, res) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
};

module.exports = {
  create,
  getAll,
};
