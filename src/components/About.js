import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <div className='about__header'>
        <h1>
          <span className='about__header-num'>02.</span>About
        </h1>
        <div className='about__header-line'></div>
      </div>
      <div className='about__aboutRow'>
        <div className='about__body'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            saepe reprehenderit suscipit officiis nostrum perspiciatis aperiam
            velit deserunt ad ipsa? Non est qui doloribus sequi distinctio?
            Ducimus amet quas dicta odio recusandae? Fugiat atque obcaecati
            autem dolor? At, facilis reprehenderit?
          </p>
          <br />
          <p>Here are the technologies I've been working with:</p>
          <br />
          <div className='about__body-skills'>
            <ul className='about__body-skills-1'>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Git &#38; Github</li>
            </ul>
            <ul className='about__body-skills-2'>
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
        <div className='about__image'>
          <div className='about__image-imageBorder'></div>
          <img
            src='https://images.unsplash.com/photo-1500649297466-74794c70acfc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTEyfHxwb3J0cmFpdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default About;
