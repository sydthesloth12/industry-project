const express = require('express')
const cors = require('cors')
const customSearchQuery = express()

customSearchQuery.use(express.json())
customSearchQuery.use(cors())

const metricDefinitionRouter = require('./controllers/metricDefinition')
const searchRouter = require('./controllers/transaction')
const restaurantRouter = require('./controllers/resturaunt')
const transactionRouter = require('./controllers/transaction')

customSearchQuery.use('/metricDefinitions', metricDefinitionRouter)
customSearchQuery.use('/restaraunts', restaurantRouter)
customSearchQuery.use('/transactions', transactionRouter)

customSearchQuery.listen(1337, () => {
  console.log('listening at http://localhost:1337')
})
