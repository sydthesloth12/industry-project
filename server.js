const express = require('express')
const customSearchQuery = express()

const metricDefinitionRouter = require("./routes/metricDefinition")

customSearchQuery.use(express.json())

customSearchQuery.use("/metricDefinitions", metricDefinitionRouter)

console.log('This works, on http://localhost:3000')

customSearchQuery.listen(3000)
