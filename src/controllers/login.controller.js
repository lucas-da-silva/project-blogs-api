const loginService = require('../services/login.service');
const { mapError } = require('../utils/errorMap');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await loginService.login(email, password);
  if (type) return res.status(mapError(type)).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  login,
};
