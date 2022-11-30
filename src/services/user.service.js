const { User } = require('../models');
const { createToken } = require('../utils/jwtFunctions');
const { validateCreate } = require('./validations/validateUser');

const create = async (displayName, email, password, image) => {
  const isInvalid = await validateCreate(displayName, email, password);
  if (isInvalid.type) return isInvalid;

  await User.create({ displayName, email, password, image });

  const data = image ? { displayName, email, image } : { displayName, email };
  const token = createToken(data);

  return { type: null, message: { token } };
};

const getAll = async () =>
  User.findAll({ attributes: { exclude: 'password' } });

module.exports = {
  create,
  getAll,
};
