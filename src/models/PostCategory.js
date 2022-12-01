module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
      categoryId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true }
    },
    {
      underscored: true,
      tableName: 'posts_categories',
      timestamps: false
    }
  );

  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });
    Category.belongsToMany(BlogPost, {
      as: 'blogPosts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    });
  };  

  return PostCategory;
};
