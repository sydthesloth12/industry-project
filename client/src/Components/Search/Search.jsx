import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MultipleSelect from '../multiselect/multiselect'
import MetricDefinitions from '../MetricDefinitions/MetricDefinitions'
import DateRange from '../DateRange/DateRange'
import TimeRange from '../TimeRange/TimeRange'
import { Button } from '@mantine/core'

const Search = () => {
    const [restaurants, setRestaurants] = useState([])
    const [selectedRestaurants, setSelectedRestaurants] = useState([])
    const [metricDefinitions, setMetricDefinitions] = useState([])
    const [selectedMetricDefinition, setSelectedMetricDefinition] = useState('')
    const [selectedOperator, setSelectedOperator] = useState('')
    const [value, setValue] = useState(0)
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
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
    }

    

    return (
        <div className='search'>
            <MultipleSelect restaurants={restaurants} selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants}/>
            <MetricDefinitions metricDefinitions={metricDefinitions} setSelectedMetricDefinition={setSelectedMetricDefinition} setSelectedOperator={setSelectedOperator} value={value} setValue={setValue}/>
            <DateRange fromDate={fromDate} setFromDate={setFromDate} toDate={toDate} setToDate={setToDate}/>
            <TimeRange fromHour={fromHour} setFromHour={setFromHour} toHour={toHour} setToHour={setToHour}/>
            <Button onClick={submitSearch}>Search</Button>
        </div>
        
    )


}

export default Search