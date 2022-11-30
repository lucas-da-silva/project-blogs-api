const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'mySecret';

const createToken = (data, expiresIn = '1h') => {
  const jwtConfig = { expiresIn, algorithm: 'HS256' };
  const token = jwt.sign({ data }, secret, jwtConfig);
  return token;
};

module.exports = { 
  createToken,
};