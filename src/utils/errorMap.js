const errorMap = {
  TOKEN_MISSING: 401,
  BAD_REQUEST: 400,
  SERVER_ERROR: 500,
  CONFLICT: 409,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  mapError,
  errorMap,
};