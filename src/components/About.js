import React from 'react';
import myImage from '../image/myImage.png';
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
          <p>Hey! I'm Mohannad, a full stack web developer based in Berlin.</p>
          <br />
          <p>
            I enjoy creating websites, web applications, or anything in between.
            My goal is to always build products that provide beautiful UI and
            performant experiences. I have strong ability to adjust rapidly to
            challenging situations and finding an appropriate solution for every
            problem.
          </p>
          <br />
          <p>
            <strong className='about__body-photography'>
              When I'm not in front of a computer screen
            </strong>
            , I'm probably walking around the city and making some street
            photographs.
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
          <div className='about__image-imageLayer'></div>
          <img src={myImage} alt='' />
        </div>
      </div>
    </div>
  );
};

export default About;
