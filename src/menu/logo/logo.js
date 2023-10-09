import React from 'react'

import logo from '../../icon/avatar.png'
import arrow from '../../icon/arrow.png'

function Logo() {
  return (
    <div className='logo'>
      <img className='logo__img' src={logo} alt="logo"></img>
      <div className='logo__text'>
        <div className='logo__nik'>AnimatedFred</div>
        <div className='logo__email'>animated@demo.com</div>
      </div>
      <img className='logo__arrow' src={arrow} alt="arrow"></img>
    </div>
  )
}

export default Logo