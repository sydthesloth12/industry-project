import React from "react"
import { DatePicker } from '@mantine/dates'
import { Grid } from "@mantine/core"

const DateRange = (props) => {
    const { fromDate, setFromDate, toDate, setToDate } = props

    console.log(toDate)

    return (
        <>
        <Grid.Col span={6}>
            <DatePicker label="From Date" value={fromDate} onChange={setFromDate}/>
        </Grid.Col>
        <Grid.Col span={6}>
            <DatePicker label="To Date" value={toDate} onChange={setToDate}/> 
        </Grid.Col>
        </>
        
    )
}

export default DateRange
