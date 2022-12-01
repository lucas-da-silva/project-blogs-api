const { loginService } = require('../services');
const { mapError } = require('../utils/errorMap');

const create = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await loginService.create(email, password);
  if (type) return res.status(mapError(type)).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  create,
};
