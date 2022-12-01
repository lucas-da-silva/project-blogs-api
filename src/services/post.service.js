const { BlogPost } = require('../models');
const { validateCreate } = require('./validations/validatePost');

const create = async (title, content, categoryIds) => {
  const isInvalid = await validateCreate(categoryIds);
  if (isInvalid.type) return isInvalid;
};

module.exports = {
  create,
};