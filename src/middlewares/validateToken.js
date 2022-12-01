const { verifyToken } = require('../utils/jwtFunctions');

module.exports = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status('401').json({ message: 'Token not found' });

  try {
    const decoded = verifyToken(token);
    req.user = decoded.data;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};