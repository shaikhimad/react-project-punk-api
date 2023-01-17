import React from 'react'

const Card = (props) => {
  const { data } = props
 
  const information = data.map((beer) => (
  <div key ={beer.id}>
    <p>{beer.name}</p>
    <img src={beer.image_url} alt="picture of beer"/>
    <h1>This is not Halal.</h1>
  </div>
  ))
  return (
    <div>{information}</div>
  )
}

export default Card