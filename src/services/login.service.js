const { User } = require('../models');
const { createToken } = require('../utils/jwtFunctions');

const create = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) return { type: 'BAD_REQUEST', message: 'Invalid fields' };
  const data = { id: user.id };
  const token = createToken(data);
  return { type: null, message: { token } };
};

module.exports = {
  create,
};
