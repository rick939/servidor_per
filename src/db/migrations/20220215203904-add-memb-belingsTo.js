'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    return queryInterface.addColumn('Membros', 'tmId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Esquadrao',
        key: 'id'
      },
      onDelete: 'SET NULL'
    })

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Membros', 'tmId');
    
  }
};
