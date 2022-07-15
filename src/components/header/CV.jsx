import React from 'react'
import TheCV from '../../assets/cv.pdf'

const CV = () => {
  return (
    <div className='cta'>
      <a href={TheCV} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default CV