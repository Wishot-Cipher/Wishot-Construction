import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick'

export const Testimonies = () => {
    const settings = {
        dots : true,
        isFinite: true,
        speed : 1000,
        slidesToShow: 2,
        slidesToScroll : 1,
        autoplay : true,
        responsive: [
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            } ]
      };

  return (
    <div>
        <Container>
            <div className="testionieHeader">
                <h6>TESTIMONIALS</h6>
                <h2>Client Feedback</h2>
            </div>
            <div className="TestiSlider">
                <Slider {...settings}>
                    <div className='testimonialslider'>
                        Alom
                    </div>
                    <div  className='testimonialslider'>
                        Wisdom
                    </div>
                    <div  className='testimonialslider'>
                        Wishot
                    </div>
                    <div  className='testimonialslider'>
                        Obumneme
                    </div>

                </Slider>
            </div>
        </Container>
    </div>
  )
}
