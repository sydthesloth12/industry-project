import React from 'react'
import './multiselect.css'
import { MultiSelect } from '@mantine/core';

const MultipleSelect = (props) => {
  const { restaurants, selectedRestaurants, setSelectedRestaurants } = props

  const restaurantOptions = restaurants.map((restaurant) => {
    return {...restaurant, value: restaurant.id, label: restaurant.name}
  })

  return <MultiSelect data={restaurantOptions} value={selectedRestaurants} onChange={setSelectedRestaurants} clearable clearButtonLabel="Clear select field"/>;
}

export default MultipleSelect
