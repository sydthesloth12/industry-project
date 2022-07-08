/* eslint-disable quotes */
const express = require('express')
const models = require('../models')
const router = express.Router()

// Get metric definitions
router.get('/', async (req, res) => {
  const transactions = await models.TransactionData.findAll()

  return res.send(transactions)
})



module.exports = router
