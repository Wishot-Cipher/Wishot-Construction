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
                    <h1>Delivering Dependable Services <br /> To Industry Sector</h1>
                </div>
                <div className="servicesCont">
                    <div className="serviceCard">
                        <div className="subService">
                        <img src={serviceImg1} alt="Service Image 1" />
                            <div className="serviceText">
                                <div className='serviceFont'> <p><FontAwesomeIcon icon={faLaptopCode}/></p></div>
                                <div>
                                    <h5> Proficiently Done Work</h5>
                                    <p> Experience the satisfaction of proficiently executed work for exceptional results on our Architecture Designs. </p>
                                    {/* <h6>read More</h6> <br /> */}
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
                                    <h5>Mechanical Expertise At Its Finest. </h5>
                                    <p>Experience unparalleled mechanical expertise in the construction industry for exceptional results. </p>
                                    {/* <h6>read More</h6> <br /> */}
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
                                    <p>Working with expert <b>engineers</b> who specializes on building construction, road construction, bridges construction etc. </p>
                                    {/* <h6>read More</h6> <br /> */}
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
