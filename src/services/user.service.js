const { User } = require('../models');
const { createToken } = require('../utils/jwtFunctions');
const { validateCreate } = require('./validations/validateUser');

const create = async (displayName, email, password, image) => {
  const isInvalid = await validateCreate(displayName, email, password);
  if (isInvalid.type) return isInvalid;
  return { type: null, message: 'token' };
};

module.exports = {
  create,
};