const { User } = require('../../models');

const regexEmail = /\S+@\S+\.\S+/;
const formatError = (message) => ({ type: 'BAD_REQUEST', message });

const validateCreate = async (displayName, email, password) => {
  if (displayName.length < 8) {
    return formatError(
      '"displayName" length must be at least 8 characters long',
    );
  }
  if (!regexEmail.test(email)) {
    return formatError('"email" must be a valid email');
  }
  if (password.length < 6) {
    return formatError('"password" length must be at least 6 characters long');
  }

  const user = await User.findOne({ where: { email } });
  if (user) {
    return { type: 'CONFLICT', message: 'User already registered' };
  }

  return { type: null };
};

module.exports = {
  validateCreate,
};
