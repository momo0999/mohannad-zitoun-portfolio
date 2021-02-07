import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact__content'>
        <p className='contact__question'>
          <span>04. </span>Have a question or want to work together?
        </p>
        <br />
        <h1>Get In Touch</h1>
        <br />
        <p className='contact__text-1'>
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or you want to say hi, I'will try my best
          to get back to you!
        </p>
        <p className='contact__text-2'></p>
      </div>
      <a className='contact__link' href='mailto:mzitoun@hotmail.com'>
        Contact Me
      </a>
    </div>
  );
};

export default Contact;
