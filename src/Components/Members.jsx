import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import teamImage1 from "../assets/Construct_Images/team-1.jpg"
import teamImage2 from "../assets/Construct_Images/team-2.jpg"
import teamImage3 from "../assets/Construct_Images/team-3.jpg"
import { Container } from 'react-bootstrap'
import {faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const Members = () => {
  return (
    <div>
        <Container>
            <div className='memberHeader'>
                <h6>OUR MEMBERS</h6>
                <h1> 
                   We Have Experience Team
                </h1>
            </div>
            <div className="memberBodyCont">
                <div className="memberCard memberCard1">
                    <img src={teamImage1} alt="Team Image One" />
                    <div className='slidecont'>
                       <div className="slideDown">
                            <p className='slide1'><FontAwesomeIcon icon={faFacebookF}/></p>
                            <p className='slide2'> <FontAwesomeIcon icon={faTwitter}/></p>
                            <p className='slide3'> <FontAwesomeIcon icon={faInstagram}/></p>
                        </div>
                    </div>
                    <div className='memberRole'>
                        <div className='memTectCont'> 
                            <div className='memText'>
                                <h3>Robi Daron</h3>
                                <p>Officer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="memberCard memberCard2">
                  <img src={teamImage2} alt="Team Image One" /> 
                   <div className='slidecont'>
                       <div className="slideDown">
                            <p className='slide1'> <FontAwesomeIcon icon={faFacebookF}/></p>
                            <p className='slide2'> <FontAwesomeIcon icon={faTwitter}/></p>
                            <p className='slide3'> <FontAwesomeIcon icon={faInstagram}/></p>
                        </div>
                    </div>
                    <div className='memberRole'>
                        <div className='memTectCont'> 
                            <div className='memText'>
                                <h3>Metala Rop</h3>
                                <p>Team Leader</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="memberCard memberCard3">
                   <img src={teamImage3} alt="Team Image One" />
                   <div className='slidecont'>
                       <div className="slideDown">
                            <p className='slide1'> <FontAwesomeIcon icon={faFacebookF}/></p>
                            <p className='slide2'> <FontAwesomeIcon icon={faTwitter}/></p>
                            <p className='slide3'> <FontAwesomeIcon icon={faInstagram}/></p>
                        </div>
                    </div>
                    <div className='memberRole'>
                        <div className='memTectCont'> 
                            <div className='memText'>
                                <h3>Jonson Smit</h3>
                                <p>Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <br />
        </Container>
    </div>
  )
}
