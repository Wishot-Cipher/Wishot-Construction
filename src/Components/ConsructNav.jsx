import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo1 from '../assets/Construct_Images/croppedLogo.png';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

export const ConstructNav = () => {
  const [active, setActive] = useState(false);
  const [activeLiLink, setActiveLiLink] = useState('')
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setActive(false);
    }
  };
  
   const showMenu = () => {
    setActive(!active)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [active]);

  const scrollLinkStyle = {
    color : 'white'
  }

  return (
    <>
      <div className='header'>
        <div className='largeSc'>
          <div className='logo'>
            <img src={logo1} height={40} alt='logo' /><h2>KINGRITE</h2>
          </div>
          <div className='showmenu' onClick={showMenu}>
            <FontAwesomeIcon icon={faBarsStaggered} />
          </div>
        </div>
        <nav className={active ? 'slider active' : 'slider'} ref={ref}>
          <div className='logoLx'>
            {' '}
            <img src={logo1} height={40} alt='logo' /><h2>KINGRITE</h2>
          </div>
          <ul>
            <li className='menu'> <div className="logo"> <img src={logo1} height={40} alt="logo"/><h2>KINGRITE</h2></div> </li>
              <ScrollLink
                // activeClass='activate'
                onSetActive={() => setActiveLiLink("home")}
                to='home'
                spy={true}
                smooth={true}
                offset={-20}
                duration={70}
                onClick={showMenu}
                className='scrollLink'
                style={{ color : 'white !important'}}
                >
                  <li className={activeLiLink === "home" ? "activate" : ""}>
                   Home
                </li>
              </ScrollLink>
              <ScrollLink
                onSetActive={() => setActiveLiLink("about")}
                to='about'
                spy={true}
                smooth={true}
                offset={-20}
                duration={70}
                onClick={showMenu}
                className='scrollLink'
                >
                  <li  className={activeLiLink === "about" ? "activate" : ""}>
                    About
                 </li>
              </ScrollLink>
              <ScrollLink
                onSetActive={() => setActiveLiLink("services")}
                to='services'
                spy={true}
                smooth={true}
                offset={-20}
                duration={70}
                onClick={showMenu}
                className='scrollLink'
                >
                <li  className={activeLiLink === "services" ? "activate" : ""}>
                    Services
                 </li>
              </ScrollLink>
              <ScrollLink
                onSetActive={() => setActiveLiLink("contact")}
                to='contact'
                spy={true}
                smooth={true}
                offset={-20}
                duration={70}
                onClick={showMenu}
                className='scrollLink'
                >
                <li  className={activeLiLink === "contact" ? "activate" : ""}>
                   Contact
                 </li>
              </ScrollLink>
          </ul>
        </nav>
      </div>
    </>
  );
};