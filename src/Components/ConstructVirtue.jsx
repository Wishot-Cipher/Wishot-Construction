import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import aboutImg from "../assets/Construct_Images/about-img.jpg"
import { faBuildingColumns, faPersonDigging, faPersonShelter, faShip, faTools, faTruckMonster } from '@fortawesome/free-solid-svg-icons'

export const ConstructVirtue = () => {
  return (
    <>
    <Container>
        <div className='virtuesCont'>
            <div className="card card1">
                <div>
                   <h1>01</h1>
                   <div className="round"> <p><FontAwesomeIcon icon={faTruckMonster}/> </p> </div>
                   <h4>Smart Design Efficiency</h4>
                   <p>
                   we understand the importance of architecture that aligns with the intended purpose of a building. Our team of architects meticulously analyzes the functional requirements, ensuring optimal space utilization, efficient workflow, and seamless accessibility. By prioritizing functionality, we design structures that truly serve their purpose.
                   </p>
                   {/* <h5>Read More</h5> */}
                </div>
            </div>
            <div className="card card2">
                   <h1>02</h1>
                   <div className="round"> <p><FontAwesomeIcon icon={faTools}/> </p> </div>
                   <h4>Talent Management</h4>
                   <p>
                   we understand the importance of acquiring the right talent for construction projects. Our recruitment strategies focus on identifying individuals with the necessary skill sets and qualifications. Through extensive industry networks and rigorous selection processes, we ensure that we attract experienced professionals and promising newcomers who can excel in their roles.
                   </p>
                   {/* <h5>Read More</h5> */}
            </div>
            <div className="card card3">
                   <h1>03</h1>
                   <div className="round"> <p> <FontAwesomeIcon icon={faPersonDigging}/> </p> </div>
                   <h4>Top Service Quality</h4>
                   <p>
                   client satisfaction is at the core of everything we do. We prioritize clear communication, active listening, and a deep understanding of our clients' needs. By maintaining open lines of communication throughout the project, we ensure that our services align with their expectations, resulting in successful outcomes.
                   </p>
                   {/* <h5>Read More</h5> */}
            </div>
        </div> <br />
        </Container> 
        <div>
            <section id='about'>
                <Container>
                    <div className="aboutCont">
                        <div className="aboutImg"> <img src={aboutImg} alt="About Imgae" /></div>
                        <div className="aboutText">
                            <h6>OUR ABOUT US</h6>
                            <h2>We are working around Nigeria with many years of expert</h2>
                            <p> <b>Kingrite </b> is a foremost infrastructure Construction Company in Nigeria & one of the largest and most professional in the sector.

                            We are proud that we are succeeding in so many areas, utilising our continuously improving and expanding know-how, expertise, and experience to enhance life quality, helping usher in a new era of development.

                            Our services that span through multiple sectors such as : Infrastructure, Water, Power & Community innovation that provide for improved infrastructure, plentiful water, sustainable living, and clean energy.</p>
                            <div className="architecDesignCont">
                                <div className="fontSide"> <p><FontAwesomeIcon icon={faBuildingColumns}/> </p></div>
                                <div className="archiTextSide">
                                    <h4>Architecture Design</h4>
                                    <p>Discover the transformative power of visionary architecture design, where imagination meets functionality to create extraordinary spaces.</p>
                                </div>
                            </div>
                            <div className="architecDesignCont">
                                <div className="fontSide"> <p><FontAwesomeIcon icon={faShip}/> </p> </div>
                                <div className="archiTextSide"> 
                                    <h4>Design & Shipping</h4>
                                    <p>Experience the seamless fusion of design and shipping expertise, ensuring your cargo arrives safely and stylishly.</p>
                                </div>
                            </div>
                            <button>Read More</button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
         <br /> <br />

    </>
     )
}
