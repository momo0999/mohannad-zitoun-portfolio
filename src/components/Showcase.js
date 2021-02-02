import React from 'react';
import { Link } from 'react-router-dom';
import './Showcase.css';

const Showcase = () => {
  return (
    <div className='showcase'>
      <p className='showcase__text'>Hi, my name is</p>
      <h1 className='showcase__name'>Mohannad Zitoun.</h1>
      <h1 className='showcase__title'>
        I like to build Web Applications for the web.
      </h1>
      <div className='showcase__description'>
        <p>
          I'm
          <span className='showcase__description-highlight'>Full Stack</span>
          Web Developer based in Berlin, focused on building web applications
          with beautiful interfaces and experiences.
        </p>
      </div>
      <a className='showcase__contact-me' href='mailto:mzitoun@hotmail.com'>
        Contact Me
      </a>
    </div>
  );
};

export default Showcase;
