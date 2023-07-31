import React from 'react'
import { Container } from 'react-bootstrap';
import displayImage1 from "../assets/Construct_Images/p1.jpg"
import displayImage2 from "../assets/Construct_Images/p2.jpg"
import displayImage3 from "../assets/Construct_Images/p10.jpg"
import displayImage4 from "../assets/Construct_Images/p9.jpg"
import displayImage5 from "../assets/Construct_Images/constImgRoad1.jpg"
import displayImage6 from "../assets/Construct_Images/p6.jpg"
import displayImage7 from "../assets/Construct_Images/p5.jpg"
import displayImage8 from "../assets/Construct_Images/p7.jpg"
import displayImage9 from "../assets/Construct_Images/p8.jpg"
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

export const Gallery = () => {
  return (
    <div> 
             <section class="breadcrumbs">
        <div>
          <div class="d-flex justify-content-between align-items-center contactNav">
            <h2> Gallery</h2>
            <ol>
              <li>
                <Link to={"/"}> Home </Link>
              </li>
              <li>Gallery</li>
            </ol>
          </div>
        </div>
      </section>{" "}
      <br /> <br />
        <Container fluid>
        <div className="displayPhotos1">
            <div className="image1"> 
                <img src={displayImage1} alt="" />
                <div> 
                    <h4> Cutting & Milling Tool</h4>
                    <h6>CNC Mechanical and technology industry 4.0. The process of turning with a cutting and milling tool the outer surface detail of the metalworking parts.</h6>
                </div>
            </div>
            <div className="image1">
                <img src={displayImage2} alt="" />
                <div> 
                    <h4>Metal Parts</h4>
                    <h6>Shiny metal parts after cnc turning, drilling and machining on steel surface with selective focus for industrial background.</h6>
                </div>
            </div>
            <div className="image1"> 
                <img src={displayImage3} alt="" /> 
                <div> 
                    <h4> Milling Cutter</h4>
                    <h6>Industrial metalworking concept, milling cutter, metal cutter close up CNC cutters for metal. industry metal processing concept blue tone background</h6>
                </div>
            </div>
        </div>
        <div className="displayPhotos2">
            <div className="image2"> 
                <img src={displayImage4} alt="" /> 
                <div> 
                    <h4>  Metal Details</h4>
                    <h6>high precision ball screw for highspeed cutting machinery, machine component, high technology ball bearing with screw shaft assembly for accuracy machine</h6>
                </div>
            </div>
            <div className="image2">
                <img src={displayImage5} alt="" />
                <div> 
                    <h4> Lathe Machine</h4>
                    <h6>The multi tasking CNC lathe machine in metal working process milling the metal shaft parts </h6>
                </div>
            </div>
            <div className="image2"> 
                <img src={displayImage6} alt="" /> 
                <div> 
                    <h4> Automotive Wheels Nut</h4>
                    <h6> CNC Turning machine parts, automotive wheels nut, Shiny steel CNC turning parts background</h6>
                </div>
            </div>
        </div>
        <div className="displayPhotos2 image2margin">
            <div className="image2"> 
                <img src={displayImage7} alt="" /> 
                <div> 
                    <h4> Combined Coupling Pipes</h4>
                    <h6>Combined coupling for connecting polypropylene pipes</h6>
                </div>
            </div>
            <div className="image2"> 
                <img src={displayImage8} alt="" /> 
                <div> 
                    <h4> Chuck Tool</h4>
                    <h6>Collet chuck tool collets set many tye ,CNC machine</h6>
                </div>
            </div>
            <div className="image2"> 
                <img src={displayImage9} alt="" /> 
                <div> 
                    <h4> Shaft Lock</h4>
                    <h6>Shaft lock isolated on white</h6>
                </div>
            </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}
