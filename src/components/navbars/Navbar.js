import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__nav'>
        <ul>
          <li>
            <a href='#home'>
              <span className='navbar__nav-number'>01.</span>Home
            </a>
          </li>
          <li>
            <a href='#about'>
              <span className='navbar__nav-number'>02.</span>About
            </a>
          </li>
          <li>
            <a href='#projects'>
              <span className='navbar__nav-number'>03.</span>Projects
            </a>
          </li>
          <li>
            <a href='#contact'>
              <span className='navbar__nav-number'>04.</span>contact
            </a>
          </li>
          <li>
            <a className='navbar__nav-resume' href='#'>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
