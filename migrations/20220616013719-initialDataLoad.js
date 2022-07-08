'use strict'
const transaction = require('../data/TransactionData.json')

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('transactions', transaction)
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('transactions', null, {})
  }
}
