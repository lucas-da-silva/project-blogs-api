module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('categories',
      [
        {
          id: 1,
          name: 'Innovation',
        },
        {
          id: 2,
          name: 'School',
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
