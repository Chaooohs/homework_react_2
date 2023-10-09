import React from 'react'
import './menu.css'

import Logo from './logo/logo'
import Search from './search/search'
import Nav from './nav/nav'
import Logout from './logout/logout'
import Radio from './radio/radio'

function Menu() {
  return (
    <div className='menu'>
      <Logo/>
      <Search/>
      <Nav/>
      <Logout/>
      <Radio/>
    </div>
  )
}

export default Menu