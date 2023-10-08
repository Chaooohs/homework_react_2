import React from 'react'
import './menu.css'

import Logo from './logo/logo'
import Search from './search/search'
import Nav from './nav/nav'
import Logout from './logout/logout'

function Menu() {
  return (
    <div className='menu'>
      <Logo/>
      <Search/>
      <Nav/>
      <Logout/>
    </div>
  )
}

export default Menu