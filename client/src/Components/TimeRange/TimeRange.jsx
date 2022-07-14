import React from "react";
import { NativeSelect } from '@mantine/core'

const TimeRange = (props) => {
    const { fromHour, setFromHour, toHour, setToHour } = props

    let timeOptions = []

    for (let i = 6; i < 30 ; i++) {
        timeOptions.push({
            label: i,
            value: i
        })
    }

    return (
        <>
            <NativeSelect label='From Hour' data={timeOptions} value={fromHour} onChange={(event) => setFromHour(event.currentTarget.value)}/>
            <NativeSelect label='To Hour' data={timeOptions} value={toHour} onChange={(event) => setToHour(event.currentTarget.value)}/>
        </>
    )
}

export default TimeRange
