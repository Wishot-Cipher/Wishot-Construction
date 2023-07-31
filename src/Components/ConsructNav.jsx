import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo1 from '../assets/Construct_Images/mainLogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faClock, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import { faFacebookF, faInstagram, faSquareGooglePlus, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

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

  return (
    <>
      <Container fluid>
        <div className='upperContactInfo'>
            <div className="location">
              <p><a> <FontAwesomeIcon icon={faLocationPin} /></a> Plot 21 New Base Layout, Umuifi Amorji Nike Enugu, Enugu State.</p> <br />
              <p><a> <FontAwesomeIcon icon={faWhatsapp} /></a> +234-805-2426-301,  <a><FontAwesomeIcon icon={faPhone} /></a> <p>+234-803-5933-680,</p></p>
              <p><a><FontAwesomeIcon icon={faClock} /></a><b>Mon-Fri: 9am to 6pm</b> </p>
            </div>
            <div className="SocialMediaLinks">
            <a href=""> <FontAwesomeIcon icon={faFacebookF}/></a>                         
            <a href="">  <FontAwesomeIcon icon={faTwitter}/></a>
            <a href="">  <FontAwesomeIcon icon={faInstagram}/></a>
            <a href="mailto:obioraobiekwekanu@gmail.com">  <FontAwesomeIcon icon={faSquareGooglePlus}/></a>
            </div>
        </div>
      </Container>
      <div className='header'>
        <div className='largeSc'>
          <div className='logo'>
            <div>
              <img src={logo1} height={80} alt='logo' /> 
            </div>
          </div>
          <div className='showmenu' onClick={showMenu}>
            <FontAwesomeIcon icon={faBarsStaggered} />
          </div>
        </div>
        <nav className={active ? 'slider active' : 'slider'} ref={ref}>
          <div className='logoLx'>
          <img src={logo1} height={80} width={100} alt='logo' className='LogoImg' />
          </div>
          <ul>
            <li className='menu'> <div className="logo"><img src={logo1} height={40} alt="logo"/></div> </li>
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
              <Link to='/gallery' className='link'>
                <li>
                    Gallery
                </li>
              </Link>
              <Link to='/contact' className='link'>
                <li>
                    Contact
                </li>
              </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};