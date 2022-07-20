import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MultipleSelect from '../multiselect/multiselect'
import MetricDefinitions from '../MetricDefinitions/MetricDefinitions'
import DateRange from '../DateRange/DateRange'
import TimeRange from '../TimeRange/TimeRange'
import { Button, Grid } from '@mantine/core'

const Search = (props) => {
    const { setTransactions, metricDefinitions, setMetricDefinitions } = props

    const [restaurants, setRestaurants] = useState([])
    const [selectedRestaurants, setSelectedRestaurants] = useState([])
    const [selectedMetricDefinition, setSelectedMetricDefinition] = useState('')
    const [selectedOperator, setSelectedOperator] = useState('>')
    const [value, setValue] = useState(0)
    const [fromDate, setFromDate] = useState(new Date('2021-04-01T00:00:00.000Z'))
    const [toDate, setToDate] = useState(new Date('2021-04-30T00:00:00.000Z'))
    const [fromHour, setFromHour] = useState(6)
    const [toHour, setToHour] = useState(29)
    
    

    useEffect(() => {
        fetchRestaurants()
        fetchMetricDefinitions()
    }, [])

    const fetchRestaurants = async () => {
        let fetch = await axios.get("http://localhost:1337/api/restaurants")

        setRestaurants(fetch.data)
    }

    const fetchMetricDefinitions = async () => {
        let fetch = await axios.get("http://localhost:1337/api/metricdefinitions")

        setMetricDefinitions(fetch.data)
        setSelectedMetricDefinition(fetch.data[0].alias)
    }

    

    const submitSearch = async () => {
        const metricCode = metricDefinitions.find((metricDefinition) => metricDefinition.alias === selectedMetricDefinition).metricCode
        const searchObject = {
            restaurantIds: selectedRestaurants,
            fromDate,
            toDate,
            fromHour,
            toHour,
            metricCriteria: [
                 {
                     metricCode,
                     compareType: selectedOperator,
                     value,
                 }
            ]
        }
        console.log(searchObject)
        const transactionData = await axios.post('http://localhost:1337/api/search', searchObject)
        console.log(transactionData)
        setTransactions(transactionData.data)
    }

    

    return (
        <Grid columns={14} className='search' align='center' justify='center'>
            <Grid.Col span={12}>
                
                    <MultipleSelect restaurants={restaurants} selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants} align='center'/>
                
            </Grid.Col>
            
                <DateRange fromDate={fromDate} setFromDate={setFromDate} toDate={toDate} setToDate={setToDate}/>
            
            
                <TimeRange fromHour={fromHour} setFromHour={setFromHour} toHour={toHour} setToHour={setToHour}/>
            
            
                <MetricDefinitions metricDefinitions={metricDefinitions} setSelectedMetricDefinition={setSelectedMetricDefinition} selectedOperator={selectedOperator} setSelectedOperator={setSelectedOperator} value={value} setValue={setValue}/>
            <Grid.Col span={4}>
                <Button onClick={submitSearch}>Search</Button>
            </Grid.Col>
            
        </Grid>
        
    )


}

export default Search