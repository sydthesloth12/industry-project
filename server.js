const express = require('express');
const customSearchQuery = express();

customSearchQuery.use(express.json()); 

console.log("This works, on http://localhost:3000")

customSearchQuery.listen(3000);