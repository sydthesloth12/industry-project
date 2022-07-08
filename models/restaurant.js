const restaraunt = (connection, Sequelize, restaraunts) => {
  return connection.define('restaraunts', {
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zipcode: Sequelize.STRING
  })
}

module.exports = restaraunt
