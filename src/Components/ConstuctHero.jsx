import React from 'react'
import heroImg from "../assets/Construct_Images/p3.jpg"
import { Container } from 'react-bootstrap';
import Slider from 'react-slick'

export const ConstuctHero = () => {
  const settings = {
    dots : true,
    isFinite: true,
    speed : 600,
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
                <h3>Recruit The Best Employees</h3>
                <h1> Provides Effective Building <br /> Best Solution!</h1> <br />
                <button>Get Started</button>
              </div>
          </div>
          <div className="hero">
          {/* <img src={heroImg} alt="" /> */}
              <div className="heroText">
                <h3>Recruit The Best Employees</h3>
                <h1> Provides Effective Building <br /> Best Solution!</h1> <br />
                <button>Get Started</button>
              </div>
          </div>
          <div className="hero">
          {/* <img src={heroImg} alt="" /> */}
              <div className="heroText">
                <h3>Recruit The Best Employees</h3>
                <h1> Provides Effective Building <br /> Best Solution!</h1> <br />
                <button>Get Started</button>
              </div>
          </div>
          <div className="hero">
          {/* <img src={heroImg} alt="" /> */}
              <div className="heroText">
                <h3>Recruit The Best Employees</h3>
                <h1> Provides Effective Building <br /> Best Solution!</h1> <br />
                <button>Get Started</button>
              </div>
          </div>
        </Slider> 
      </section> <br /> <br />
    </Container>
    
    </>
  )
}
