const express = require('express')
const models = require('../models')
const router = express.Router()

// Get metric definitions 
router.get('/', async (req, res) => {
  try {
    const metricDefinition = await models.metricDefinitionModel.findAll()

    return res.send(metricDefinition)
  }
  catch (error) {
    return res.sendStatus(500)
  }
})

module.exports = router
