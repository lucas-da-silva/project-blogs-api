const { BlogPost, PostCategory, User, Category } = require('../models');
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

const getAll = async () =>
  BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) return { type: 'NOT_FOUND', message: 'Post does not exist' };
  return { type: null, message: post };
};
module.exports = {
  create,
  getAll,
  getById,
};
