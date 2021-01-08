import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar__header'>
        <Link to='#'>
          <img
            src='https://images.unsplash.com/photo-1609252871434-4e282b868d9a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
            alt='My Image'
          />
        </Link>
      </div>
      <button
        onClick={() => setOpenHamburgerMenu(!openHamburgerMenu)}
        className='navbar__hamburger'
      >
        <Hamburger />
      </button>
      <div className='navbar__nav'>
        <ul className={`${openHamburgerMenu ? 'active' : 'inactive'} `}>
          <li>
            <Link to='#home'>
              <span className='navbar__nav-number'>01.</span>Home
            </Link>
          </li>
          <li>
            <Link to='#about'>
              <span className='navbar__nav-number'>02.</span>About
            </Link>
          </li>
          <li>
            <Link to='#projects'>
              <span className='navbar__nav-number'>03.</span>Projects
            </Link>
          </li>
          <li>
            <Link to='#contact'>
              <span className='navbar__nav-number'>04.</span>contact
            </Link>
          </li>
          <li>
            <Link className='navbar__nav-resume' to='#'>
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
