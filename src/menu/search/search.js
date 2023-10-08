import React from 'react'
import '../menu.css'

import search from '../../icon/search.svg'

function Search() {
  return (
    <label className='search'>
      <img className='search__img' src={search} alt="search"></img>
      <input className='search__input' type="text"  placeholder="Search"></input>
    </label>
  )
}

export default Search