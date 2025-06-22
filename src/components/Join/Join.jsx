import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form =useRef()
     const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vv2gbnb', 'template_4kl60p9', form.current, {
        publicKey: 'MeVXI7LWTVzuAVwIy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr /> 
            <div>
                <span className="stroke-text">READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className="stroke-text">WITH US?</span>
            </div>
        </div>
        <div className="right-j glass-card fade-in">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder="Enter a Email address" />
                <button className="btn-advanced">Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join