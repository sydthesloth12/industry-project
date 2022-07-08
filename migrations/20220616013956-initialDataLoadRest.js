'use strict'
const restaurants = require('../data/RestaurantData.json')

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('restaurants', restaurants)
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('restaurants', null, {})
  }
}
