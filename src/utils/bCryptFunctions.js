const bcript = require('bcrypt');

const getHash = async (data) => {
  const salt = await bcript.genSalt(10);
  const crypt = await bcript.hash(data, salt);
  return crypt;
};

const getCompare = async (data, cryptData) => bcript.compare(data, cryptData);  

module.exports = {
  getHash,
  getCompare,
};