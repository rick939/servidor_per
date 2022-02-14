'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Membros', [{
      nome: "Julius Nova Chrono",
      magia: "Tempo",
      ranking: "Rei mago",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Membros', {nome: 'Julius Nova Chrono'}, {})
  }
};
