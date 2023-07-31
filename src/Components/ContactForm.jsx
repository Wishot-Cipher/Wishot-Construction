import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap"; // Make sure to import Row and Col from react-bootstrap
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const ContactForm = () => {
  // FORM SECTION
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k1a76d8",
        "template_7fm42hr",
        form.current,
        "HpuZKIZp4jW55MT8K"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
    <div className="image2margin">
      <section class="breadcrumbs">
        <div>
          <div class="d-flex justify-content-between align-items-center contactNav">
            <h2>Contact Form</h2>
            <ol>
              <li>
                <Link to={"/"}> Home </Link>
              </li>
              <li>Contact</li>
            </ol>
          </div>
        </div>
      </section>{" "}
      <br /> <br />
      <section id="contact">
        <Container>
          <Row className="justify-content-center align-items-center ">
            <Col md={8} lg={6}>
              <div className="contactForm">
                <div>
                  <h6>GET IN TOUCH</h6>
                  <div className="detailContactform">
                    <h2>We Want To Hear From You!</h2>
                    <form ref={form} onSubmit={sendEmail}>
                      <input type="text" name="name" placeholder="Your Name" />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                      />
                      <input
                        type="number"
                        name="phone"
                        placeholder="Phone"
                      />
                      <input
                        type="text"
                        name="country"
                        placeholder="Country Name"
                      />
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Your Message"
                      ></textarea>
                      <input type="submit" value="Submit" />
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> 
    </div>
      <Footer/>
    </>
  );
};
