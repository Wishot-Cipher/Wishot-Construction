import React from 'react'
import { Container } from 'react-bootstrap'
import aboutImg from "../assets/Construct_Images/emmanuel (2).jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                   Unlock smart design potential with our innovative Smart Design Efficiency service. Optimizing designs for CNC manufacturing ensures superior results.
                   </p>
                   {/* <h5>Read More</h5> */}
                </div>
            </div>
            <div className="card card2">
                   <h1>02</h1>
                   <div className="round"> <p><FontAwesomeIcon icon={faTools}/> </p> </div>
                   <h4>Talent Management</h4>
                   <p>
                   Talented engineers and designers, our greatest asset. Talent Management nurtures their potential to deliver top-notch solutions consistently to valued clients..
                   </p>
                   {/* <h5>Read More</h5> */}
            </div>
            <div className="card card3">
                   <h1>03</h1>
                   <div className="round"> <p> <FontAwesomeIcon icon={faPersonDigging}/> </p> </div>
                   <h4>Top Service Quality</h4>
                   <p>
                   Unbeatable service quality. Skilled engineers, cutting-edge technology. Exceeding expectations, every project, every time. Trust the best.
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
                            <h2>We have been working around the world with many years of expertise.</h2>
                            <p> <b> CNC PROTOTYPE MACHINE, INC </b> is a renowned international CNC Engineering Company excelling in infrastructure construction. As one of the largest and most professional entities in the industry, we take immense pride in continuously improving our know-how and leveraging our extensive experience to elevate the quality of life and drive progress.

                            Our CNC services span multiple sectors, including Infrastructure, Water, Power & Community Innovation. With our innovative solutions, we contribute to improved infrastructure, ample water resources, sustainable living, and the promotion of clean energy on a global scale. <b> CNC PROTOTYPE MACHINE, INC </b> , we are committed to excellence and strive to make a significant impact in the field of international development.





</p>
                            <div className="architecDesignCont">
                                <div className="fontSide"> <p><FontAwesomeIcon icon={faBuildingColumns}/> </p></div>
                                <div className="archiTextSide">
                                    <h4>Engineering Marvels</h4>
                                    <p> 
                                    your gateway to precision engineering and rapid innovation!, you can explore endless possibilities for design iterations, test functionalities, and refine your projects with ease. We cater to various industries, including aerospace, automotive, electronics, and more, ensuring that each component meets your exact specifications.</p>
                                </div>
                            </div>
                            <div className="architecDesignCont">
                                <div className="fontSide"> <p><FontAwesomeIcon icon={faShip}/> </p> </div>
                                <div className="archiTextSide"> 
                                    <h4>Elevate Your Vision</h4>
                                    <p>Step into a world of endless possibilities! CNC Prototyping empowers your vision with advanced technology and skilled engineering. Witness your concepts come to life as our CNC machines sculpt intricate designs with unwavering precision.</p>
                                </div>
                            </div>
                            {/* <button>Read More</button> */}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
         <br /> <br />

    </>
     )
}
