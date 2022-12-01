const { Op } = require('sequelize');
const { User, Category } = require('../models');

const queryBySearch = (term) => ({ 
  where: {
    [Op.or]: [
      {
        title: {
          [Op.like]: `%${term}%`,
        },
      },
      {
        content: {
          [Op.like]: `%${term}%`,
        },
      },
    ],
  },
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

module.exports = {
  queryBySearch,
};