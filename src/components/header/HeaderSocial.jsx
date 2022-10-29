import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/victor-manuel-cuevas-gonzalez-00a05818a/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/VictorCuevas98" target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocial