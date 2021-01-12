import React, { useState, useEffect, useRef } from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const hamburgerMenu = document.querySelector('#hamburgerMenu');
    const onBodyClick = (e) => {
      if (
        (ref.current && ref.current.contains(e.target)) ||
        e.target === hamburgerMenu
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
        <Link to='/'>
          <img
            src='https://images.unsplash.com/photo-1609252871434-4e282b868d9a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
            alt='My Image'
          />
        </Link>
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
          id='hamburgerMenu'
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
