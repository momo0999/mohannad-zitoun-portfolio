import React, { useState } from 'react';
import './Navbar.css';
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar__header'>
        <a href='#'>
          <img
            src='https://images.unsplash.com/photo-1609252871434-4e282b868d9a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
            alt='My Image'
          />
        </a>
      </div>
      <button onClick={() => setOpen(!open)} className='navbar__hamburger'>
        <Hamburger />
      </button>
      <div className='navbar__nav'>
        <ul className={`${open ? 'active' : 'inactive'} `}>
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
