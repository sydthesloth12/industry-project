const transactions = (connection, Sequelize, Restaurants) => {
  return connection.define('transactions', {
    RestaurantId: {type: Sequelize.INTEGER, references: {model: Restaurants, key: 'id'} },
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
  },
  {
    timestamps: false
  })
}

module.exports = transactions