import React from "react"
import { DatePicker } from '@mantine/dates'

const DateRange = (props) => {
    const { fromDate, setFromDate, toDate, setToDate } = props

    return (
        <>
            <DatePicker label="From Date" value={fromDate} onChange={setFromDate}/> 
            <DatePicker label="To Date" value={toDate} onChange={setToDate}/> 
        </>
        
    )
}

export default DateRange
