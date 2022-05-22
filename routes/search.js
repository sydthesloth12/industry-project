const express = require('express')
const transactionDataRepository = require('../repository/transactionRepository')
const router = express.Router()

// Get metric definitions 
router.post("/query", (req, res) => {
  console.log(req.body);
  
  res.send(req.body);
});

router.get("/test", (req,res) => {
    res.send("This works!")
})

module.exports = router; 