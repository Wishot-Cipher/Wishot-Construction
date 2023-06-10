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
                   <h4>Efficient Achitecture</h4>
                   <p>
                     Lorem, ipsum dolo Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, commodi.
                   </p>
                   <h5>Read More</h5>
                </div>
            </div>
            <div className="card card2">
                   <h1>02</h1>
                   <div className="round"> <p><FontAwesomeIcon icon={faTools}/> </p> </div>
                   <h4>Talent Management</h4>
                   <p>
                     Lorem, ipsum dolo Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, commodi.
                   </p>
                   <h5>Read More</h5>
            </div>
            <div className="card card3">
                   <h1>03</h1>
                   <div className="round"> <p> <FontAwesomeIcon icon={faPersonDigging}/> </p> </div>
                   <h4>Quality Service</h4>
                   <p>
                     Lorem, ipsum dolo Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, commodi.
                   </p>
                   <h5>Read More</h5>
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
                            <h2>We are working around the world with 25Years of expert</h2>
                            <p> We argument Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ipsa velit commodi maiores pariatur, quaerat enim aliquam est molestias? Asperiores mollitia, cupiditate voluptatibus ipsam iste quis quas maxime exercitationem, perferendis nobis similique ullam laboriosam? Quidem?</p>
                            <div className="architecDesignCont">
                                <div className="fontSide"> <p><FontAwesomeIcon icon={faBuildingColumns}/> </p></div>
                                <div className="archiTextSide">
                                    <h4>Architecture Design</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quis?</p>
                                </div>
                            </div>
                            <div className="architecDesignCont">
                                <div className="fontSide"> <p><FontAwesomeIcon icon={faShip}/> </p> </div>
                                <div className="archiTextSide"> 
                                    <h4>Design & Shipping</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tenetur.</p>
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
