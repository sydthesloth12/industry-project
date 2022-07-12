import React from 'react'
import './multiselect.css'

const restIdSelect = (props) => {
  const { candyMaker, products } = props

  return (
    <div className='detail'>
      <h4>{candyMaker.name} ({candyMaker.country})</h4>
      {products.map((product) => {
        return (
          <div className='product' key={product.id}>
            {product.name} ({product.yearIntroduced})
          </div>
        )
      })}
    </div>
  )
}

export default CandyMakerDetails
