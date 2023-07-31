import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import serviceImg1 from '../assets/Construct_Images/constImg9.jpg'
import serviceImg2 from '../assets/Construct_Images/service-2.jpg'
import serviceImg3 from '../assets/Construct_Images/constImg8.jpg'
import serviceImg4 from '../assets/Construct_Images/skilled.jpg'
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
                        <img src={serviceImg3} alt="Service Image 1" />
                            <div className="serviceText">
                                <div className='serviceFont'> <p><FontAwesomeIcon icon={faLaptopCode}/></p></div>
                                <div>
                                    <h5> Rapid Prototyping</h5>
                                    <p>Turn ideas into reality with our rapid prototyping, powered by CNC technology. Test, iterate & refine designs with ease. </p>
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
                                    <h5>Custom Parts Manufacturing. </h5>
                                    <p>Explore limitless possibilities with our custom parts manufacturing. Precision-engineered components tailored to your specifications. </p>
                                    {/* <h6>read More</h6> <br /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="serviceCard">
                        <div className="subService">
                        <img src={serviceImg6} alt="Service Image 1" />
                            <div className="serviceText">
                                <div className='serviceFont'> <p><FontAwesomeIcon icon={faHouse}/></p></div>
                                <div>
                                    <h5> Batch Production</h5>
                                    <p>Efficiency meets excellence in our batch production service. From small runs to large-scale Production, Precision is guaranteed. </p>
                                    {/* <h6>read More</h6> <br /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="servicesCont">
                    <div className="serviceCard"> 
                    <div className="subService">
                        <img src={serviceImg1} alt="Service Image 2" />
                            <div className="serviceText">
                                <div className='serviceFont'> <p><FontAwesomeIcon icon={faBridge}/></p> </div>
                                <div>
                                    <h5>Engraving and Embossing. </h5>
                                    <p>Add personalization and sophistication with our engraving and embossing service. Flawless designs on metal or wood. </p>
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
                                    <h5>Prototyping for Art and Sculpture</h5>
                                    <p>Experience artistry through sculpture prototyping. Collaborate with designers to craft masterpieces with CNC machines. </p>
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
                                    <h5>Consultation and Design Support</h5>
                                    <p>Beyond CNC machining. Benefit from design support as experts guide material selection and CNC optimization. Set projects up for success. </p>
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
