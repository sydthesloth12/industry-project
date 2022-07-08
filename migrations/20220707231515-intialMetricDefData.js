'use strict';

const metricDefinition = require('../data/MetricDefinition.json')

module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('metricDefinitions', metricDefinition)
    },


  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('metricDefinitions', null, {})
}
}
