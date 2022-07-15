import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
// import emailjs from '@emailjs/browser'

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')      //replace YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID' 'YOUR_PUBLIC_KEY' from emailjs.com
     
  //   e.targe.reset()   //to reset form
  // };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
          <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>alex.minteu@gmail.com</h5>
            <a href='mailto:alex.minteu@gmail.com'>Send a message</a>
          </article>
          <article className='contact_option'>
          <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Alex Manu Design</h5>
            <a href='https://www.facebook.com/name'>Send a message</a>
          </article>
          <article className='contact_option'>
          <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+40754616846</h5>
            <a href='https://api.whatsapp.com/send?phone+40740930451'>Send a message</a>
          </article>
          </div>

          {/* END  OF CONTACT */}
          <form >
            <input type='text' name='name' placeholder='Your Full Name' required/>
            <input type='email' name='email' placeholder='Your Email' required/>
            <textarea name='message' rows='7' placeholder='Your Message'></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact