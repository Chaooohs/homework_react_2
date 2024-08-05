import React from 'react'

import home from '../../icon/home.svg'
import other from '../../icon/other.svg'
import bell from '../../icon/bell.svg'
import piece from '../../icon/piece.svg'
import cube from '../../icon/cube.svg'

import '../../menu/menu.css'

export const Nav = () => {
  return (
    <nav>
      <div className='nav'>
        <a  href="#!" className='nav__item'>
          <img className='nav__img' src={home} alt="home"></img>
          <span className='nav__link font_md'>Dashboard</span>
        </a>
        <a href="#!" className='nav__item'>
          <img className='nav__img' src={other} alt="other"></img>
          <span className='nav__link font_md'>Revenue</span>
        </a>
        <a href="#!" className='nav__item'>
          <img className='nav__img' src={bell} alt="bell"></img>
          <span className='nav__link font_md'>Notifications</span>
        </a>
        <a href="#!" className='nav__item'>
          <img className='nav__img' src={piece} alt="piece"></img>
          <span className='nav__link font_md'>Analytics</span>
        </a>
        <a href="#!" className='nav__item'>
          <img className='nav__img' src={cube} alt="cube"></img>
          <span className='nav__link font_md'>Inventory</span>
        </a>
      </div>
    </nav>
  )
}
