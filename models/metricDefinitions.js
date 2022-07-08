const MetricDefinitions = (connection, Sequelize) => {
    return connection.define('metricDefinitions', {
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
}

module.exports = MetricDefinitions