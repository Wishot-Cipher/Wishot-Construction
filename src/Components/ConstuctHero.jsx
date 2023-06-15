import React from 'react'
import heroImg from "../assets/Construct_Images/p3.jpg"
import { Container } from 'react-bootstrap';
import Slider from 'react-slick'

export const ConstuctHero = () => {
  const settings = {
    dots : true,
    isFinite: true,
    speed : 1000,
    slidesToShow: 1,
    slidesToScroll : 1,
    autoplay : true
  };
  return (
    <>
    <Container fluid> 
      <section id='home'>
        <Slider {...settings}>
          <div className="hero">
                {/* <img src={heroImg} alt="" /> */}
              <div className="heroText">
                <h3>Assemble A High-performing Team Of Experts.</h3>
                <h1>Transforming Vision Into <br /> Architectural Wonders!</h1> <br />
                <button>Get Started</button>
              </div>
          </div>
          <div className="hero hero2">
          {/* <img src={heroImg} alt="" /> */}
              <div className="heroText">
              <h3>Assemble A High-performing Team Of Experts.</h3>
                <h1> Crafting Extraordinary Structures <br /> With Passion!</h1> <br />
                <button>Get Started</button>
              </div>
          </div>
          <div className="hero hero3">
          {/* <img src={heroImg} alt="" /> */}
              <div className="heroText">
              <h3>Assemble A High-performing Team Of Experts.</h3>
                <h1> Elevating Construction Standards, <br />Exceeding Expectations !</h1> <br />
                <button>Get Started</button>
              </div>
          </div>
        </Slider> 
      </section> <br /> <br />
    </Container>
    
    </>
  )
}
