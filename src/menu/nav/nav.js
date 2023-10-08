import React from 'react'
import '../menu.css'

import home from '../../icon/home.svg'
import other from '../../icon/other.svg'
import bell from '../../icon/bell.svg'
import piece from '../../icon/piece.svg'
import cube from '../../icon/cube.svg'

function Nav() {
  return (
    <nav>
      <div className='nav'>
        <a  href="#!" className='nav__item'>
          <img className='nav__img' src={home} alt="home"></img>
          <span className='nav__link'>Dashboard</span>
        </a>
        <a href="#!" className='nav__item'>
          <img className='nav__img' src={other} alt="other"></img>
          <span className='nav__link'>Revenue</span>
        </a>
        <a href="#!" className='nav__item'>
          <img className='nav__img' src={bell} alt="bell"></img>
          <span className='nav__link'>Notifications</span>
        </a>
        <a href="#!" className='nav__item'>
          <img className='nav__img' src={piece} alt="piece"></img>
          <span className='nav__link'>Analytics</span>
        </a>
        <a href="#!" className='nav__item'>
          <img className='nav__img' src={cube} alt="cube"></img>
          <span className='nav__link'>Inventory</span>
        </a>
      </div>
    </nav>
  )
}

export default Nav