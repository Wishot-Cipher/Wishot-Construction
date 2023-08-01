import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import roundImg2 from '../assets/Construct_Images/team-2.jpg';
import roundImg3 from '../assets/Construct_Images/team-3.jpg';
import roundImg1 from '../assets/Construct_Images/team-1.jpg';

export const Testimonies = () => {
  const settings = {
    dots: true,
    isFinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    gap: 10,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className='testimonialContainer'>
      <Container>
        <div className='testimonialHeader'>
          <h6>TESTIMONIALS</h6>
          <h2>Client Feedback</h2>
        </div>
        <div className='TestiSlider'>
          <Slider {...settings}>
            <div className='testimonialslider'>
              <p>
                <q>
                  "Your CNC services have greatly improved our manufacturing
                  process. The precision and efficiency of your machines are
                  top-notch."
                </q>
              </p>
              <div className='testiProfileCont'>
                <div className='roundImageSec'>
                  <img src={roundImg1} alt='testimonial image' />
                </div>
                <div className='textSec'>
                  <h4>John Doe</h4>
                  <p>CEO, XYZ Manufacturing</p>
                </div>
              </div>
            </div>
            <div className='testimonialslider'>
              <p>
                <q>
                  "Working with your CNC team has been a great experience. The
                  quality of the parts we received exceeded our expectations."
                </q>
              </p>
              <div className='testiProfileCont'>
                <div className='roundImageSec'>
                  <img src={roundImg2} alt='testimonial image' />
                </div>
                <div className='textSec'>
                  <h4>Jane Smith</h4>
                  <p>Product Engineer, ABC Tech</p>
                </div>
              </div>
            </div>
            <div className='testimonialslider'>
              <p>
                <q>
                  "Your CNC prototypes helped us in the design iteration phase
                  and saved us valuable time in product development."
                </q>
              </p>
              <div className='testiProfileCont'>
                <div className='roundImageSec'>
                  <img src={roundImg3} alt='testimonial image' />
                </div>
                <div className='textSec'>
                  <h4>Mike Johnson</h4>
                  <p>Founder, Innovate Designs</p>
                </div>
              </div>
            </div>
            <div className='testimonialslider'>
              <p>
                <q>
                  "We appreciate your CNC team's attention to detail and
                  commitment to delivering our orders on time. It's been a
                  pleasure working with you."
                </q>
              </p>
              <div className='testiProfileCont'>
                <div className='roundImageSec'>
                  <img src={roundImg2} alt='testimonial image' />
                </div>
                <div className='textSec'>
                  <h4>Emily Brown</h4>
                  <p>Production Manager, Global Innovations</p>
                </div>
              </div>
            </div>
            {/* Add two more testimonial divs below */}
            <div className='testimonialslider'>
              <p>
                <q>
                  "Your CNC team's dedication to quality and precision has
                  impressed us. We look forward to future collaborations."
                </q>
              </p>
              <div className='testiProfileCont'>
                <div className='roundImageSec'>
                  <img src={roundImg1} alt='testimonial image' />
                </div>
                <div className='textSec'>
                  <h4>Michael Anderson</h4>
                  <p>Engineering Manager, Tech Solutions</p>
                </div>
              </div>
            </div>
            <div className='testimonialslider'>
              <p>
                <q>
                  "The CNC parts provided by your team fit perfectly in our
                  assembly, saving us time and ensuring seamless production."
                </q>
              </p>
              <div className='testiProfileCont'>
                <div className='roundImageSec'>
                  <img src={roundImg3} alt='testimonial image' />
                </div>
                <div className='textSec'>
                  <h4>Laura Walker</h4>
                  <p>Operations Manager, Precision Tech</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};
