import React from 'react'
import { Grid, NativeSelect, NumberInput } from '@mantine/core'


const MetricDefinitions = (props) => {
    const { metricDefinitions, setSelectedMetricDefinition, selectedOperator, setSelectedOperator, value, setValue } = props

    const metricDefinitionNames = metricDefinitions.map((metricDefinition) => metricDefinition.alias)

    const operators = ['>','<','>=','<=','=']


  
    return (
        <>
        <Grid.Col span={4}>
        <NativeSelect label= 'Metric Code' data={metricDefinitionNames} onChange={(event) => {setSelectedMetricDefinition(event.currentTarget.value)}}/>

        </Grid.Col>
        <Grid.Col span={4}>
        <NativeSelect label= 'Compare Type' data={operators} value={selectedOperator} onChange={(event) => {setSelectedOperator(event.currentTarget.value)}}/>
            
        </Grid.Col>
        <Grid.Col span={4}>
        <NumberInput label= 'Value' value={value} onChange={(val) => {setValue(val)}}/>
            
        </Grid.Col>
            
        </>
    )
  }
  
  export default MetricDefinitions