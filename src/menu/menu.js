import React from 'react'
import './menu.css'
import { open, close } from '../method/index'

import Logo from './logo/logo'
import Search from './search/search'
import Nav from './nav/nav'
import Logout from './logout/logout'
import Radio from './radio/radio'

function Menu() {
  return (
    <div className='menu' onMouseOver={() => open()} onMouseOut={() => close()}>
      <Logo />
      <Search />
      <Nav />
      <Logout />
      <Radio />
    </div>
  )
}

export default Menu