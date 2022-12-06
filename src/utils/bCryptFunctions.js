const { genSalt, hash, compare } = require('bcrypt');

const getHash = async (data) => {
  const salt = await genSalt(10);
  const crypt = await hash(data.toString(), salt);
  return crypt;
};

const getCompare = async (data, cryptData) => compare(data, cryptData);  
 
module.exports = {
  getHash,
  getCompare,
};