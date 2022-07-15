import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {RiFolderOpenLine} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about-container'>
        <div className='about_me'>
          <img src={ME} />
        </div>
      

      <div className='about_content'>
        <div className='about_cards'>

          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>

          <article className='about_card'>
            <FiUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>300+ Worldwide</small>
          </article>

          <article className='about_card'>
            <RiFolderOpenLine className='about_icon'/>
            <h5>Projects</h5>
            <small>80+ Completed</small>
          </article>
        </div>

        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...</p>
        <a href='contact' className='btn btn-primary'>Let's talk</a>
      </div>
      </div>
    </section>
  )
}

export default About