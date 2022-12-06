const { User } = require('../models');
const { createToken } = require('../utils/jwtFunctions');
const { validatePassword } = require('./validations/validateLogin');

const create = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) return { type: 'BAD_REQUEST', message: 'Invalid fields' };
  
  const passwordIsInvalid = await validatePassword(password, user.password);
  if (passwordIsInvalid.type) return passwordIsInvalid;
  
  const data = { id: user.id };
  const token = createToken(data);
  return { type: null, message: { token } };
};

module.exports = {
  create,
};
