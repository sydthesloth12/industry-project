'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('metricDefinitions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      metricCode: {
        type: Sequelize.STRING
      },
      alias: {
        type: Sequelize.STRING
      },
      dataType: {
        type: Sequelize.STRING
      },
      decimalPlaces: {
        type: Sequelize.INTEGER
      },
    })
  },

  async down (queryInterface) {
    return queryInterface.dropTable('metricDefinitions')
  }
};
