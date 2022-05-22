const express = require('express')
const restDataRepository = require('../repository/resturauntRepository')
const router = express.Router()

// Get metric definitions 
router.get('/', (req, res) => {
  const restData = resturauntRepository.getRestData()

  res.send(restData)
})

module.exports = router; 