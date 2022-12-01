const { Category, BlogPost } = require('../../models');

const validateCreate = async (categoryIds) => {
  const categories = await Promise.all(
    categoryIds.map(async (id) => Category.findOne({ where: { id } })),
  );

  if (categories.some((category) => !category)) {
    return {
      type: 'BAD_REQUEST',
      message: 'one or more "categoryIds" not found',
    };
  }

  return { type: null };
};

const validateOwner = async (id, tokenId) => {
  const { userId } = await BlogPost.findOne({ where: { id } });
  if (userId !== tokenId) {
    return { type: 'UNAUTHORIZED', message: 'Unauthorized user' };
  }
  return { type: null };
};

module.exports = {
  validateCreate,
  validateOwner,
};
