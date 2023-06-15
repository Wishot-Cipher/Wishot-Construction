import React from 'react'
import chooseImg from '../assets/Construct_Images/constAward.webp'
import displayImage1 from "../assets/Construct_Images/p1.jpg"
import displayImage2 from "../assets/Construct_Images/p2.jpg"
import displayImage3 from "../assets/Construct_Images/p3.jpg"
import displayImage4 from "../assets/Construct_Images/p4.jpg"
import displayImage5 from "../assets/Construct_Images/constImgRoad1.jpg"
import displayImage6 from "../assets/Construct_Images/p6.jpg"
import { Container } from 'react-bootstrap'

export const WhyChooseUs = () => {
  return (
    <div>
        <Container>
            <div className="chooseUsCont">
                <div className="chooseUsReason">
                    <h6>WHY CHOOSE US</h6>
                    <h1> We Serve A Wide Variety Of Indusries</h1>
                    <p>  <b>Quality Workmanship:</b> We are committed to delivering superior craftsmanship in every aspect of our construction projects. From precise engineering to meticulous attention to detail, we take pride in our work and strive for excellence.</p>
                    <p><b>Expertise:</b> With years of experience in the construction industry, we bring extensive knowledge and expertise to every project. Our team of professionals is skilled in building roads, buildings, and bridges, ensuring top-quality results.</p>
                </div>
                <div className="companyMisson">
                    <h6>COMPANY MISSON</h6>
                    <div className="subCompanyMisson">
                        <div className="missonText">
                            <h5> INDULGE YOUR CURIOSITY</h5>
                           <h4> An Award-Winning Big Company </h4>
                            <p>
                            To be a leading business group creating advanced and sustainable living environments in Nigeria and around the world, for us and for generations to come.
                            </p>
                        </div>
                        <div className="missonImg">
                           <img src={chooseImg} alt="Choose Us Image" />
                        </div>
                    </div>
                </div>
            </div>
            </Container>
            <Container fluid>
            <div className="displayPhotos1">
                <div className="image1"> 
                    <img src={displayImage1} alt="" />
                    <div> 
                        <h4> Houses Construction</h4>
                        <h6>Construction Engineer</h6>
                    </div>
                </div>
                <div className="image1">
                    <img src={displayImage2} alt="" />
                    <div> 
                        <h4> Roads Construction</h4>
                        <h6>Construction Engineer</h6>
                    </div>
                </div>
                <div className="image1"> 
                    <img src={displayImage3} alt="" /> 
                    <div> 
                        <h4> Bridges Construction</h4>
                        <h6>Construction Engineer</h6>
                    </div>
                </div>
            </div>
            <div className="displayPhotos2">
                <div className="image2"> 
                    <img src={displayImage4} alt="" /> 
                    <div> 
                        <h4> Engine Construction</h4>
                        <h6>Construction Engineer</h6>
                    </div>
                </div>
                <div className="image2">
                    <img src={displayImage5} alt="" />
                    <div> 
                        <h4> Roads Construction</h4>
                        <h6>Construction Engineer</h6>
                    </div>
                </div>
                <div className="image2"> 
                    <img src={displayImage6} alt="" /> 
                    <div> 
                        <h4> Building Construction</h4>
                        <h6>Developer</h6>
                    </div>
                </div>
            </div>
         </Container>
    </div>
  )
}
