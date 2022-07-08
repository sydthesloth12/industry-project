const express = require('express')
const models = require('../models')
const router = express.Router()

// Get metric definitions 
router.get('/', async (req, res) => {
  try {
    const restaurants = await models.restarauntModel.findAll()

    return res.send(restaurants)
  }
  catch (error) {
    console.log(error)
    return res.sendStatus(500)

  }
})

module.exports = router
