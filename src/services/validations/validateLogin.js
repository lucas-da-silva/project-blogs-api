const { getCompare } = require('../../utils/bCryptFunctions');

const validatePassword = async (password, cryptPassword) => {
  const passwordIsValid = await getCompare(password, cryptPassword);
  if (!passwordIsValid) return { type: 'UNAUTHORIZED', message: 'Incorrect password' };
  return { type: null };
}; 

module.exports = { 
  validatePassword,
};