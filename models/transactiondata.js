const transactions = (connection, Sequelize, restaraunts) => {
  return connection.define('transactions', {
    RestaurantId: Sequelize.INTEGER,
    BusDt: Sequelize.DATE,
    OrderNumber: Sequelize.INTEGER,
    OrderTime: Sequelize.DATE,
    OrderTImeMinuteofDay: Sequelize.INTEGER,
    TotalAmount: Sequelize.FLOAT,
    NetAmount: Sequelize.FLOAT,
    ItemSoldQty: Sequelize.INTEGER,
    BeverageQty: Sequelize.INTEGER,
    DiscountAmount: Sequelize.FLOAT,
    DiscountRatio: Sequelize.FLOAT,
    ItemDeletedAmount: Sequelize.FLOAT,
    RefundAmount: Sequelize.FLOAT
  })
}

module.exports = transactions