import React, { useState, useEffect, useRef } from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';

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
        <Switch
          uncheckedIcon={false}
          checkedIcon={false}
          className='react-switch'
          id='material-switch'
          offHandleColor='#fba501'
          onHandleColor='#6a5acd'
          onColor='#bae67e'
          offColor='#808080'
          disabled={false}
          checked={darkMode}
          onChange={() => setDarkMode((prevMode) => !prevMode)}
        />

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
            <Link to='/' className='navbar__nav-link'>
              <span className='navbar__nav-number'>01.</span>Home
            </Link>
          </li>
          <li>
            <Link to='/about' className='navbar__nav-link'>
              <span className='navbar__nav-number'>02.</span>About
            </Link>
          </li>
          <li>
            <Link to='/projects' className='navbar__nav-link'>
              <span className='navbar__nav-number'>03.</span>Projects
            </Link>
          </li>
          <li>
            <Link to='/contact' className='navbar__nav-link'>
              <span className='navbar__nav-number'>04.</span>Contact
            </Link>
          </li>
          <li>
            <a
              className='navbar__nav-resume'
              target='_blank'
              href='https://drive.google.com/file/d/1cORMQFPDxhus0okCB2bF4cejwu4QzrMl/view?usp=sharing'
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
