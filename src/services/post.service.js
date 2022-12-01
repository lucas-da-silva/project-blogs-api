const { BlogPost, PostCategory } = require('../models');
const { validateCreate } = require('./validations/validatePost');

const create = async (title, content, userId, categoryIds) => {
  const isInvalid = await validateCreate(categoryIds);
  if (isInvalid.type) return isInvalid;

  const post = await BlogPost.create({ title, content, userId });

  const postCategory = categoryIds.map((categoryId) => ({
    postId: post.id,
    categoryId,
  }));
  await PostCategory.bulkCreate(postCategory);

  return { type: null, message: post };
};

module.exports = {
  create,
};
