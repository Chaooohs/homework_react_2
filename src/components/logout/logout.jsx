import React from 'react'

import logout from '../../icon/logout.svg'

export const Logout = () => {
  return (
    <a className='logout' href='#!'>
      <img className='logout__img' src={logout} alt="logout"></img>
      <span className='logout__text font_md'>Logout</span>
    </a>
  )
}
