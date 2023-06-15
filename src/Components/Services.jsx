import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import serviceImg1 from '../assets/Construct_Images/constImg9.jpg'
import serviceImg2 from '../assets/Construct_Images/service-2.jpg'
import serviceImg3 from '../assets/Construct_Images/constImg8.jpg'
import serviceImg4 from '../assets/Construct_Images/costructImg7.webp'
import serviceImg5 from '../assets/Construct_Images/constDesign.jpg'
import serviceImg6 from '../assets/Construct_Images/constImg10.jpg'
import { faBridge, faBuilding, faBuildingUser,  faHandsHoldingChild,  faHouse,  faLaptopCode, faTruckMonster } from '@fortawesome/free-solid-svg-icons'

export const Services = () => {
  return (
    <div className='servicesBackground'>
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
                                    <h5> Commercial Construction</h5>
                                    <p> Trust our experienced team for your commercial construction needs. We deliver innovative solutions for building offices and commercial establishments. </p>
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
                                    <h5>Renovation and Remodeling. </h5>
                                    <p>Revitalize your space with our exceptional renovation and remodeling services. Our skilled team breathes new life into existing structures. </p>
                                    {/* <h6>read More</h6> <br /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="serviceCard"> 
                    <div className="subService">
                        <img src={serviceImg4} alt="Service Image 3" />
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
                <div className="servicesCont">
                    <div className="serviceCard">
                        <div className="subService">
                        <img src={serviceImg6} alt="Service Image 1" />
                            <div className="serviceText">
                                <div className='serviceFont'> <p><FontAwesomeIcon icon={faHouse}/></p></div>
                                <div>
                                    <h5> Residential Construction</h5>
                                    <p> Transform your dream home into a reality with our expert residential construction services, from custom homes to renovations and additions. </p>
                                    {/* <h6>read More</h6> <br /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="serviceCard"> 
                    <div className="subService">
                        <img src={serviceImg3} alt="Service Image 2" />
                            <div className="serviceText">
                                <div className='serviceFont'> <p><FontAwesomeIcon icon={faBridge}/></p> </div>
                                <div>
                                    <h5>Infrastructure Development. </h5>
                                    <p>Building the backbone of your community with our infrastructure development services. From roads to bridges and utilities. </p>
                                    {/* <h6>read More</h6> <br /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="serviceCard"> 
                    <div className="subService">
                        <img src={serviceImg5} alt="Service Image 3" />
                            <div className="serviceText">
                                <div className='serviceFont'> <p><FontAwesomeIcon icon={faTruckMonster}/></p> </div>
                                <div>
                                    <h5>Design-Build Services</h5>
                                    <p>Simplify your construction journey with our comprehensive design-build services. From initial concepts to final construction. </p>
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
