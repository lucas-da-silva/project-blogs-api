const errorMap = {
  TOKEN_MISSING: 401,
  BAD_REQUEST: 400,
  SERVER_ERROR: 500,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  mapError,
};