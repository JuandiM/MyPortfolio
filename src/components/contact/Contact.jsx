import React, { useState, useRef } from 'react';
import './contact.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const formRef = useRef();
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      'service_jdmr1',
      'template_oa956cd',
      formRef.current,
      'user_5CDjaYgKnKDC1pXGJzQWH'
    )
    .then((result)=> {
      console.log(result);
      setMessage(true);
    },
    (error) => {
      console.log(error)
    })
    
  }

  return (
  
    <div className='contact' id='contact'>
      <div className="left">
        <img src='assets/2118725.jpg' alt=''/>
      </div>
      <div className="right">
        <h2>Let's talk</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type='text' placeholder='Name' name="user_name" required/>
          <input type='text' placeholder='Subject' name="user_subject"required/>
          <input type='text' placeholder='Email' name="user_email"required/>
          <textarea placeholder='Message' name="message"></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div>
    </div>


    )
};

export default Contact;
