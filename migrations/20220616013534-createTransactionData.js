'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      RestaurantId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      BusDt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      OrderNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      OrderTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      OrderTimeMinuteofDay: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      TotalAmount: {
        type: Sequelize.FLOAT
      },
      NetAmount: {
        type: Sequelize.FLOAT
      },
      ItemSoldQty: {
        type: Sequelize.INTEGER
      },
      BeverageQty: {
        type: Sequelize.INTEGER
      },
      DiscountAmount: {
        type: Sequelize.FLOAT
      },
      DiscountRatio: {
        type: Sequelize.FLOAT
      },
      ItemDeletedAmount: {
        type: Sequelize.FLOAT
      },
      RefundAmount: {
        type: Sequelize.FLOAT
      },
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable('transactions')
  }
}
