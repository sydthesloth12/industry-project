const express = require('express')
const models = require('../models')
const { Op } = require('sequelize')
const router = express.Router()

// Get MetricDefinitions 
router.post('/', async (req, res) => {
    try {
    const sequelizeOperators = {
        '>': Op.gt,
        '<': Op.lt,
        '>=': Op.gte,
        '<=': Op.lte, 
        '=': Op.eq
    }

    const { 
            restaurantIds, fromDate, toDate, fromHour, toHour, metricCriteria
    } = req.body

      const whereClause = { 
        RestaurantId: restaurantIds,
        BusDt: { [Op.between]: [fromDate, toDate] },
        OrderTImeMinuteofDay: { [Op.between]: [fromHour * 60, toHour * 60] }
       }  

       for (let i = 0; i < metricCriteria.length; i++) {
        const { metricCode, compareType, value } = metricCriteria[i];
        whereClause[metricCode] = { [sequelizeOperators[compareType]]: value }
       }


      const foundTransactions = await models.TransactionData.findAll({
        where: whereClause
      })
  
      return res.send(foundTransactions)
    }
    catch (error) {
      console.log(error)
      return res.sendStatus(500)
    }
  })

module.exports = router
