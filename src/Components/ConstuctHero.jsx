import React from 'react'
import heroImg from "../assets/Construct_Images/p3.jpg"
import { Container } from 'react-bootstrap';
import Slider from 'react-slick'
import { Link } from 'react-router-dom';

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
              <h3>Building a High-Performing CNC Team.</h3>
              <h1>Transforming Visions Into <br /> CNC Masterpieces!</h1> <br />
                <Link to={"/gallery"}> <button>Our Gallery</button> </Link>
              </div>
          </div>
          <div className="hero hero2">
          {/* <img src={heroImg} alt="" /> */}
              <div className="heroText">
              <h3>Building a High-Performing CNC Team.</h3>
              <h1>Crafting Extraordinary CNC Structures <br /> with Precision and Passion!</h1> <br />
                 <Link to={"/gallery"}> <button>Our Gallery</button> </Link>
              </div>
          </div>
          <div className="hero hero3">
          {/* <img src={heroImg} alt="" /> */}
              <div className="heroText">
              <h3>Crafting A Top-notch Team of CNC Experts.</h3>
                <h1>Turning Concepts Into <br /> Engineering Marvels!</h1> <br />
                <Link to={"/gallery"}> <button>Our Gallery</button> </Link>
              </div>
          </div>
        </Slider> 
      </section> <br /> <br />
    </Container>
    
    </>
  )
}
