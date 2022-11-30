const { User } = require('../models');
const { createToken } = require('../utils/jwtFunctions');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) return { type: 'BAD_REQUEST', message: 'Invalid fields' };
  const token = createToken(email);
  return { type: null, message: { token } };
};

module.exports = {
  login,
};
