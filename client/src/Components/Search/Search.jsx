import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MultipleSelect from '../multiselect/multiselect'
import MetricDefinitions from '../MetricDefinitions/MetricDefinitions'
import { Button } from '@mantine/core'

const Search = () => {
    const [restaurants, setRestaurants] = useState([])
    const [selectedRestaurants, setSelectedRestaurants] = useState([])
    const [metricDefinitions, setMetricDefinitions] = useState([])
    const [selectedMetricDefinition, setSelectedMetricDefinition] = useState('')
    const [selectedOperator, setSelectedOperator] = useState('')
    const [value, setValue] = useState(0)
    
    

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

    

    const submitSearch = () => {
        console.log(metricDefinitions)
        const metricCode = metricDefinitions.find((metricDefinition) => metricDefinition.alias === selectedMetricDefinition).metricCode
        const searchObject = {
            restaurantIds: selectedRestaurants,
            metricDefinitions: [
                {
                    metricCode,
                    compareType: selectedOperator,
                    value
                    
                }
            ]
        }
        console.log(searchObject)
    }

    

    return (
        <div className='search'>
            <MultipleSelect restaurants={restaurants} selectedRestaurants={selectedRestaurants} setSelectedRestaurants={setSelectedRestaurants}/>
            <MetricDefinitions metricDefinitions={metricDefinitions} setSelectedMetricDefinition={setSelectedMetricDefinition} setSelectedOperator={setSelectedOperator} value={value} setValue={setValue}/>
            <Button onClick={submitSearch}>Search</Button>
        </div>
        
    )


}

export default Search