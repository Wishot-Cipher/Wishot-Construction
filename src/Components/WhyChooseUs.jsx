import React from 'react'
import chooseImg from '../assets/Construct_Images/constAward.webp'
import { Container } from 'react-bootstrap'

export const WhyChooseUs = () => {
  return (
    <div>
        <Container>
            <div className="chooseUsCont">
                <div className="chooseUsReason">
                    <h6>WHY CHOOSE US</h6>
                    <h1> We Serve A Wide Variety Of Indusries</h1>
                    <p><b>Precision Engineering:</b> At CNC PROTOTYPE MACHINE, INC., we are dedicated to delivering superior craftsmanship in every CNC project. From precise programming to meticulous attention to detail, we take pride in our work and strive for engineering excellence.</p>
                    <p><b>CNC Expertise:</b> With years of experience in the CNC engineering industry, our team brings extensive knowledge and expertise to every project. Our professionals are skilled in crafting precision parts, prototypes, and intricate components, ensuring top-quality results for your manufacturing needs.</p>
                </div>
                <div className="companyMisson">
                    <h6>COMPANY MISSON</h6>
                    <div className="subCompanyMisson">
                        <div className="missonText">
                        <h5>EMBRACE CNC INNOVATION</h5>
                        <h4> A Premier CNC Engineering Company </h4>
                        <p>
                        At CNC PROTOTYPE MACHINE, INC., we strive to be the leading innovators in CNC engineering, catering to clients across the globe. Our mission is to create advanced and sustainable solutions for precision manufacturing, pushing the boundaries of CNC technology for a better future - today and for generations to come.
                        </p>
                        </div>
                        <div className="missonImg">
                           <img src={chooseImg} alt="Choose Us Image" />
                        </div>
                    </div>
                </div>
            </div>
            </Container>
    </div>
  )
}
