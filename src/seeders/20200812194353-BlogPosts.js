module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('blog_posts',
      [
        {
          id: 1,
          title: 'Post of the year',
          content: 'Best post of the year',
          user_id: 1,
          published: new Date('2011-08-01T19:58:00.000Z'),
          updated: new Date('2011-08-01T19:58:51.000Z'),
        },
        {
          id: 2,
          title: 'Let is go',
          content: 'Rocket has no reverse',
          user_id: 1,
          published: new Date('2011-08-01T19:58:00.000Z'),
          updated: new Date('2011-08-01T19:58:51.000Z'),
        },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('blog_posts', null, {});
  },
};
