const express = require('express')
const metricDefinitionRepository = require('../repository/metricDefinitionRepository')
const router = express.Router()

// Get metric definitions 
router.get('/', (req, res) => {
  const metricDefinitions = metricDefinitionRepository.getMetricDefinitions()

  res.send(metricDefinitions)
})

module.exports = router; 