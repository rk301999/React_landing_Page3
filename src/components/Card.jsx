import React from 'react'

const Card = ({id,price,image,symbol}) => {
  return (
    <div className='card'>
        <img src={image} alt="image" />
        <h1>{symbol}</h1>
        <h3>{id}</h3>
        <p>₹{price}</p>
    </div>
  )
}

export default Card
