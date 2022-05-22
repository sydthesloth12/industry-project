const express = require('express')
const transactionDataRepository = require('../repository/transactionRepository')
const router = express.Router()

// Get metric definitions 
router.get('/', (req, res) => {
  const transactionData = transactionDataRepository.getTransactionData()

  res.send(transactionData)
})

module.exports = router; 