import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import serviceImg1 from '../assets/Construct_Images/service-1.jpg'
import serviceImg2 from '../assets/Construct_Images/service-2.jpg'
import serviceImg3 from '../assets/Construct_Images/service-3.jpg'
import { faBuildingUser,  faHandsHoldingChild,  faLaptopCode } from '@fortawesome/free-solid-svg-icons'

export const Services = () => {
  return (
    <div>
        <Container>
             <section id='services'>
                <div className="servicesHeaderCont">
                    <h5>OUR SERVICES</h5>
                    <h1>Providing A Reliable Services <br /> To Industry Sector</h1>
                </div>
                <div className="servicesCont">
                    <div className="serviceCard">
                        <div className="subService">
                        <img src={serviceImg1} alt="Service Image 1" />
                            <div className="serviceText">
                                <div className='serviceFont'> <p><FontAwesomeIcon icon={faLaptopCode}/></p></div>
                                <div>
                                    <h5>Skill complete work </h5>
                                    <p>We help you discover any protection inclusion thet are ideal for you </p>
                                    <h6>read More</h6> <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="serviceCard"> 
                    <div className="subService">
                        <img src={serviceImg2} alt="Service Image 2" />
                            <div className="serviceText">
                                <div className='serviceFont'> <p><FontAwesomeIcon icon={faBuildingUser}/></p> </div>
                                <div>
                                    <h5>Expert Mechanical </h5>
                                    <p>We help you discover any protection inclusion thet are ideal for you </p>
                                    <h6>read More</h6> <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="serviceCard"> 
                    <div className="subService">
                        <img src={serviceImg3} alt="Service Image 3" />
                            <div className="serviceText">
                                <div className='serviceFont'> <p><FontAwesomeIcon icon={faHandsHoldingChild}/></p> </div>
                                <div>
                                    <h5>Our skilled engineers</h5>
                                    <p>We help you discover any protection inclusion thet are ideal for you </p>
                                    <h6>read More</h6> <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container> <br />
    </div> 
  )
}
