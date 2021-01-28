import React, { useState, useEffect, useRef } from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);
  const ref = useRef();
  const menuRef = useRef();
  useEffect(() => {
    const onBodyClick = (e) => {
      if (
        (ref.current && ref.current.contains(e.target)) ||
        e.target === menuRef.current
      ) {
        return;
      }
      setOpenHamburgerMenu(false);
    };
    document.body.addEventListener('click', onBodyClick);
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  return (
    <div className='navbar'>
      <div className='navbar__header'>
        <span className='icon' style={{ color: darkMode ? 'grey' : 'orange' }}>
          ☀︎
        </span>
        <span className='toggle'>
          <input
            checked={darkMode}
            onChange={() => setDarkMode((prevMode) => !prevMode)}
            id='checkbox'
            className='checkbox'
            type='checkbox'
          />
          <label htmlFor='checkbox' />
        </span>

        <span
          className='icon'
          style={{ color: darkMode ? 'slateblue' : 'grey' }}
        >
          ☾
        </span>
      </div>
      <button
        ref={ref}
        onClick={() => setOpenHamburgerMenu(!openHamburgerMenu)}
        className='navbar__hamburger'
      >
        <Hamburger toggled={openHamburgerMenu} toggle={setOpenHamburgerMenu} />
      </button>
      <div className='navbar__nav'>
        <ul
          ref={menuRef}
          className={`${openHamburgerMenu ? 'open' : 'close'} `}
        >
          <li>
            <Link to='/'>
              <span className='navbar__nav-number'>01.</span>Home
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <span className='navbar__nav-number'>02.</span>About
            </Link>
          </li>
          <li>
            <Link to='/projects'>
              <span className='navbar__nav-number'>03.</span>Projects
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              <span className='navbar__nav-number'>04.</span>Contact
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
