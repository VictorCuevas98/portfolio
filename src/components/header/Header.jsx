import React, { useRef } from 'react'
import './header.css'
import Buttons from './CV'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
import Animation from '../animation/Animation'
import ToggleSwitch from '../toggleswitch/ToggleSwitch'
import { gsap } from "gsap"
import { useEffect } from 'react'

const Header = () => {

  return (
    <header>
      <div className="container header__container">
        <Animation />
        <Buttons />
        <HeaderSocial />
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        {/*<ToggleSwitch label='Idioma'/>*/}
      </div>
    </header>
  )
}

export default Header