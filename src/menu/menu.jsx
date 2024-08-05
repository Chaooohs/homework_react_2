import React from 'react'
import './menu.css'
import { open, close } from '../method/index'

import { Logo } from '../components/logo/logo'
import {Search} from '../components/search/search'
import {Nav} from '../components/nav/nav'
import {Radio} from '../components/radio/radio'
import { Logout } from '../components/logout/logout'

export const Menu = () => {
  return (
    <div className='menu' onMouseOver={() => open()} onMouseOut={() => close()}>
      <Logo />
      <Search />
      <Nav />
      <Logout/>
      <Radio />
    </div>
  )
}
