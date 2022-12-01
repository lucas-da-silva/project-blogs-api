const { Category } = require('../../models');

const validateCreate = async (categoryIds) => {
  const categories = await Promise.all(
    categoryIds.map(async (id) => Category.findOne({ where: { id } })),
  );

  if (categories.some((category) => !category)) {
    return { type: 'BAD_REQUEST', message: 'one or more "categoryIds" not found' };
  }
  
  return { type: null };
};

module.exports = {
  validateCreate,
};