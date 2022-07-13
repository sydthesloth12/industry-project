import React from 'react'
import { NativeSelect, NumberInput } from '@mantine/core'


const MetricDefinitions = (props) => {
    const { metricDefinitions, setSelectedMetricDefinition, setSelectedOperator, value, setValue } = props

    const metricDefinitionNames = metricDefinitions.map((metricDefinition) => metricDefinition.alias)

    const operators = ['>','<','>=','<=','=']


  
    return (
        <div>
            <NativeSelect label= 'Metric Code' data={metricDefinitionNames} onChange={(event) => {setSelectedMetricDefinition(event.currentTarget.value)}}/>
            <NativeSelect label= 'Compare Type' data={operators} onChange={(event) => {setSelectedOperator(event.currentTarget.value)}}/>
            <NumberInput label= 'Value' value={value} onChange={(val) => {setValue(val)}}/>
        </div>
    )
  }
  
  export default MetricDefinitions