import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick'
import roundImg2 from '../assets/Construct_Images/team-2.jpg'
import roundImg3 from '../assets/Construct_Images/team-3.jpg'
import roundImg1 from '../assets/Construct_Images/team-1.jpg'


export const Testimonies = () => {
    const settings = {
        dots : true,
        isFinite: true,
        speed : 1000,
        slidesToShow: 2,
        slidesToScroll : 1,
        autoplay : true,
        gap: 10,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            } ]
      };

  return (
    <div className='testimonialContainer'>
        <Container>
            <div className="testimonialHeader">
                <h6>TESTIMONIALS</h6>
                <h2>Client Feedback</h2>
            </div>
            <div className="TestiSlider">
                <Slider {...settings}>
                    <div className='testimonialslider'>
                        <p>
                            <q>
                              SBI then established a business relationship with the defunct Western Region Government in the late 50s. This   relationship led to the incorporation of Nigerian.
                            </q>
                        </p>
                        <div className="testiProfileCont">
                            <div className='roundImageSec'>
                                <img src={roundImg1} alt="testimonial image" />
                            </div>
                            <div className="textSec">
                                <h4>Wishot Cipher</h4>
                                <p>Chife Engineer</p>
                            </div>                      
                        </div>
                    </div>
                    <div  className='testimonialslider'>
                        <p>
                            <q>
                              SBI then established a business relationship with the defunct Western Region Government in the late 50s. This   relationship led to the incorporation of Nigerian.
                            </q>
                        </p>
                        <div className="testiProfileCont">
                            <div className='roundImageSec'>
                                <img src={roundImg2} alt="testimonial image" />
                            </div>
                            <div className="textSec">
                                <h4>Wishot Cipher</h4>
                                <p>Chife Engineer</p>
                            </div>                      
                        </div>
                    </div>
                    <div  className='testimonialslider'>
                        <p>
                            <q>
                              SBI then established a business relationship with the defunct Western Region Government in the late 50s. This   relationship led to the incorporation of Nigerian.
                            </q>
                        </p>
                        <div className="testiProfileCont">
                            <div className='roundImageSec'>
                                <img src={roundImg3} alt="testimonial image" />
                            </div>
                            <div className="textSec">
                                <h4>Wishot Cipher</h4>
                                <p>Chife Engineer</p>
                            </div>                      
                        </div>
                    </div>
                    <div  className='testimonialslider'>
                        <p>
                            <q>
                               SBI then established a business relationship with the defunct Western Region Government in the late 50s. This relationship led to the incorporation of Nigerian.
                            </q>
                        </p>
                        <div className="testiProfileCont">
                            <div className='roundImageSec'>
                                <img src={roundImg2} alt="testimonial image" />
                            </div>
                            <div className="textSec">
                                <h4>Wishot Cipher</h4>
                                <p>Chife Engineer</p>
                            </div>                      
                        </div>
                    </div>

                </Slider>
            </div>
        </Container>
    </div>
  )
}
