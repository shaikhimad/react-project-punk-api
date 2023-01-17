import beers from './Data/beers.js';
import React, { useEffect, useState } from 'react'
import Main from './Components/Main/Main.jsx'
import Nav from './Components/Nav/Nav.jsx'
const App = () => {
  
  const [drinks, setDrinks] = useState(beers)
  const [searchInput, setSearchInput] = useState("")
  // const handleSearch = (event) => {
  // return
  // }
  return (
    <div>
      <Nav searchInput={searchInput}/>
      {/* return beers.name.match(searchInput) */}
      <Main beers = {drinks}/>
    </div>
  )
};

export default App