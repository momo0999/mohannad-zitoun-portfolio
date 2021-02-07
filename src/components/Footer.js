import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__text'>
        <p>Built by Mohannad Zitoun &copy; {new Date().getFullYear()}</p>
      </div>
      <div className='footer__icons'>
        <a href='https://github.com/momo0999' target='_blank' rel='noreferrer'>
          <i className='fab fa-github'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/mohannadzitoun'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-linkedin'></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
