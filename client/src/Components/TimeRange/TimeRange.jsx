import React from "react";
import { NativeSelect, Grid } from '@mantine/core'

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
            <Grid.Col span={6}>
                <NativeSelect label='From Hour' data={timeOptions} value={fromHour} onChange={(event) => setFromHour(event.currentTarget.value)}/>
            </Grid.Col>
            <Grid.Col span={6}>
                <NativeSelect label='To Hour' data={timeOptions} value={toHour} onChange={(event) => setToHour(event.currentTarget.value)}/>
            </Grid.Col>

        </>
        
    )
}

export default TimeRange
