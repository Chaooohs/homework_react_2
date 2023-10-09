import React from 'react'
import '../menu.css'

import sun from '../../icon/sun.svg'
import sunRadio from '../../icon/sun-radio.svg'
import moon from '../../icon/moon.svg'

function Radio() {
  return (
    <div className='radio'>
      <img className='radio__img' src={sun}></img>
      <span className='radio__text font_md'>Light mode</span>
      <div className='radio__box'>
        <input className='radio__input' type="radio" name="theme" id="el1"></input>
        <label className='radio__label' for="el1">
          <img src={sunRadio} alt="white"></img>
        </label>
        <input className='radio__input' type="radio" name="theme" id="el2"></input>
        <label className='radio__label' for="el2">
          <img src={moon} alt="dark"></img>
        </label>
      </div>
    </div>
  )
}

export default Radio