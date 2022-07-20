const express = require('express')
const cors = require('cors')
const path = require('path')
const customSearchQuery = express()

customSearchQuery.use(express.json())
customSearchQuery.use(cors())
customSearchQuery.use(express.static('client/build'))

const metricDefinitionRouter = require('./controllers/metricDefinition')
const searchRouter = require('./controllers/search')
const restaurantRouter = require('./controllers/resturaunt')

customSearchQuery.use('/api/metricDefinitions', metricDefinitionRouter)
customSearchQuery.use('/api/restaurants', restaurantRouter)
customSearchQuery.use('/api/search', searchRouter)

customSearchQuery.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client/build', 'index.html')))

customSearchQuery.listen(1337, () => {
  console.log('listening at http://localhost:1337')
})
