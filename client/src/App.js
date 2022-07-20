import React, { useState } from 'react'
import './App.css';
import Search from './Components/Search/Search';
import TransactionTable from './Components/TransactionTable/TransactionTable';

function App() {
  const [transactions, setTransactions] = useState([])
  const [metricDefinitions, setMetricDefinitions] = useState([])
  console.log(transactions)
  return (
    <div className= "App">
      <h1>Custom Search Query</h1>
      <Search setTransactions={setTransactions} metricDefinitions={metricDefinitions} setMetricDefinitions={setMetricDefinitions}/>
      <TransactionTable transactions={transactions} metricDefinitions={metricDefinitions}/>
    </div>
  );
}

export default App;
