import React from 'react'
import '../menu.css'
import changeRadio from '../../method/changeRadio'

import sun from '../../icon/sun.svg'
import sunRadio from '../../icon/sun-radio.svg'
import moon from '../../icon/moon.svg'

function Radio() {
  return (
    <div className='radio'>
      <img className='radio__img' src={sun}></img>
      <span className='radio__text font_md'>Light mode</span>
      <div className='radio__box'>
        <input className='radio__input' type="radio" name="theme" id="el1" onClick={() => changeRadio()}></input>
        <label className='radio__label' for="el1">
          <img src={sunRadio} alt="white" className='radio__sun block' id="img1"></img>
        </label>
        <input className='radio__input' type="radio" name="theme" id="el2" onClick={() => changeRadio()}></input>
        <label className='radio__label' for="el2">
          <img src={moon} alt="dark" className='radio__moon' id="img2"></img>
        </label>
      </div>
    </div>
  )
}

export default Radio