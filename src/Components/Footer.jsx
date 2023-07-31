import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import logo1 from '../assets/Construct_Images/mainLogo.jpg';
import { Container } from 'react-bootstrap'
import { faFacebookF, faInstagram, faSquareGooglePlus, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
  return (
    <div className='footerBackgroung'>
        <Container>
            <div className="footerCont">
                <div className="footerleftSec">
                    <div className='footerLogo'>
                    {/* <img src={logo1} alt="logo" /> */}
                    <h2>CNC PROTOTYPE MACHINE, INC.</h2>
                    </div> 
                    <p>Experience the satisfaction of proficiently executed work for exceptional results on our Architecture Designs.</p>
                </div>
                <div className="footerCenterSec">
                    <h3> LOCATION </h3> <br /> <br />
                    <p><a> <FontAwesomeIcon icon={faLocationPin} /> </a> 5441 Western Ave Ste C, Boulder, CO 80301,EIN-SOLE PROPRIETOR</p>
                    <p><a> <FontAwesomeIcon icon={faWhatsapp} /></a>   +234-805-2426-301, </p> <p><a><FontAwesomeIcon icon={faPhone} /> +234-803-5933-680 </a></p>
                    <p><a><FontAwesomeIcon icon={faClock} /></a> <b>Mon-Fri: 9am to 6pm</b> </p>
                </div>
                <div className="footerRightSec">
                   <h3>  SOCIAL-MEDIA LINKS  </h3> <br /> <br />
                   <a href=""> <p> <i> <FontAwesomeIcon icon={faFacebookF}/>  </i>  Facebook </p> </a>                      
                   <a href=""> <p> <i> <FontAwesomeIcon icon={faTwitter}/>  </i>  Twitter </p> </a> 
                   <a href=""> <p> <i> <FontAwesomeIcon icon={faInstagram}/>  </i>  Instagram </p> </a> 
                    <a href="mailto:obioraobiekwekanu@gmail.com"> <p>  <i><FontAwesomeIcon icon={faSquareGooglePlus}/> </i> Email Us</p></a>
                </div>
            </div> <hr />
            <div className="copyrite">
                <h6>Copyrite @Kingrite all rights reserved </h6>
            </div>
        </Container>
    </div>
  )
}
