import React from 'react';
import Card from '../Card/Card';

const Main = (props) => {
  const {beers} = props

  return (
    <div>
    <Card data = {beers}/>
    </div>
  )
}

export default Main