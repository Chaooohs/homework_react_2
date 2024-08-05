import React from 'react'

import search from '../../icon/search.svg'
import '../../menu/menu.css'

export const Search = () => {
  return (
    <label className='search'>
      <img className='search__img' src={search} alt="search"></img>
      <input className='search__input font_md' type="text" placeholder="Search"></input>
    </label>
  )
}
