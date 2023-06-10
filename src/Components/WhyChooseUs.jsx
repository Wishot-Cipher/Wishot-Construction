import React from 'react'
import chooseImg from '../assets/Construct_Images/tab-img.png'
import displayImage1 from "../assets/Construct_Images/p1.jpg"
import displayImage2 from "../assets/Construct_Images/p2.jpg"
import displayImage3 from "../assets/Construct_Images/p3.jpg"
import displayImage4 from "../assets/Construct_Images/p4.jpg"
import displayImage5 from "../assets/Construct_Images/p5.jpg"
import displayImage6 from "../assets/Construct_Images/p6.jpg"
import { Container } from 'react-bootstrap'

export const WhyChooseUs = () => {
  return (
    <div>
        <Container>
            <div className="chooseUsCont">
                <div className="chooseUsReason">
                    <h6>WHY CHOOSE US</h6>
                    <h1>We Serve A Wide Variety Of Indusries</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem tempora odit blanditiis nisi velit culpa ut accusantium perspiciatis esse laboriosam fuga dicta voluptatem ad repellendus nihil provident neque optio doloribus et, veniam hic dignissimos. Quo dolore provident inventore molestias iusto.</p>
                </div>
                <div className="companyMisson">
                    <h6>COMPANY MISSON</h6>
                    <div className="subCompanyMisson">
                        <div className="missonText">
                            <h5> INDULGE YOUR CURIOSITY</h5>
                           <h4> An Award-Winning Big Company </h4>
                            <p>
                                we belive Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit, non rerum deleniti voluptatum fugiat obcaecati consequatur corrupti blanditiis laborum dignissimos rem minima, sequi iste doloribus error cupiditate omnis. Repudiandae!
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
