import React from 'react'
import DataTable from 'react-data-table-component'
import moment from 'moment'
import { Grid } from '@mantine/core'

const TransactionTable = (props) => {
    const { transactions, metricDefinitions } = props

    const initialColumns = [
        {
            name: 'ID',
            selector: row => row.RestaurantId,
            sortable: true,
            //width: '110px',
            allowOverflow: true,
            
        },
        {
            name: 'Date',
            selector: row => row.BusDt,
            sortable: true,
            format: (row) => moment(row.BusDt).format('MM-DD-YY')
            //width: '110px'
        },
        {
            name: 'Time',
            selector: row => row.OrderTime,
            sortable: true,
            format: (row) => moment.utc(row.OrderTime).format('HH:mm A')
            //width: '110px',
        },
        {
            name: 'Ticket #',
            selector: row => row.OrderNumber,
            sortable: true,
            //width: '110px'
        },
    ]
    
    const dataColumns = metricDefinitions.map((metricDefinition) => {
        let formatter

        if (metricDefinition.dataType === 'Money') {
            formatter = (row) => {
                const roundedValue = row[metricDefinition.metricCode].toFixed(2)
                
                return '$' + roundedValue
            }
        }

        if (metricDefinition.dataType === 'Percent') {
            formatter = (row) => {
                const roundedValue = row[metricDefinition.metricCode].toFixed(2)
                
                return roundedValue + '%'
            }
        }

        return {
            name: metricDefinition.alias,
            selector: row => row[metricDefinition.metricCode],
            sortable: true,
            format: formatter
        }
    })

    return (
        <Grid columns={14} justify='center'>
            <Grid.Col span={12}>
                <DataTable title="Transaction Data" columns={[...initialColumns, ...dataColumns]} data={transactions} pagination dense={true} responsive={true} />
            </Grid.Col>
        </Grid>
    )
}

export default TransactionTable