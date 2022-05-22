const express = require('express')
const customSearchQuery = express()

const metricDefinitionRouter = require("./routes/metricDefinition")
const searchRouter = require("./routes/transaction")

customSearchQuery.use(express.json())

customSearchQuery.use("/metricDefinitions", metricDefinitionRouter)
customSearchQuery.use("/search", searchRouter)

console.log('This works, on http://localhost:3000')

customSearchQuery.listen(3000)
