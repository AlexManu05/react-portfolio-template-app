import React from 'react'
import './header.css'
import CV from './CV'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className='container header-container'>
        <h5>Hello I'm</h5>
        <h1>Hajia Bintu</h1>
        <h5 className='text-light'>fullstack Developer</h5>
        <CV />
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt='me'/>
        </div>
        

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header