import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsDribbble} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
    <a href='https://linkedin.com'><BsLinkedin/></a>
    <a href='https://github.com' ><FaGithub/></a>
    <a href='https://dribble.com'><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocials