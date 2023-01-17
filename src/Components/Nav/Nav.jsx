import React from 'react'

const Nav = (props) => {
  const {onChange, searchInput} = props;
  return (
    <div>
      <input type="search"
      size="50" onChange={onChange} value={searchInput}/>
      <span>Search</span>
      <input type="checkbox"/>
      <span>High ABV (greater than 6.0%)</span>
      <input type="checkbox"/>
      <span>Classic Range</span>
      <input type="checkbox"/>
      <span>Acidic(Ph less than 4)</span>
    </div>
  )
}

export default Nav