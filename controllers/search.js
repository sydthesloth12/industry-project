const express = require('express')
const models = require('../models')
const router = express.Router()

// Get MetricDefinitions 
router.post('/', express.json(), filterData)

module.exports = router
