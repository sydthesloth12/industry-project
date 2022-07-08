const restaraunt = (connection, Sequelize, restaraunts) => {
  return connection.define('restaurants', {
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zipcode: Sequelize.STRING
  },
  {
    timestamps: false
  })
}

module.exports = restaraunt
