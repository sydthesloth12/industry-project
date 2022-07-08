const Sequelize = require('sequelize')
const allConfigs = require('../config/config')
const RestaurantModel = require('./restaurant')
const MetricDefinitionsModel = require('./metricDefinitions')
const TransactionDataModel = require('./transactiondata')


const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Restaurants = RestaurantModel(connection, Sequelize)
const TransactionData = TransactionDataModel(connection, Sequelize, Restaurants)
const MetricDefinitions = MetricDefinitionsModel(connection, Sequelize)

Restaurants.hasMany(TransactionData)
TransactionData.belongsTo(Restaurants)


module.exports = {
  Restaurants,
  TransactionData,
  MetricDefinitions,
  Op: Sequelize.Op
}
