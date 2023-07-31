import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";


export const FaqSection = () => {
    const [clicked, setClicked] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const [clicked3, setClicked3] = useState(false);
    const [clicked4, setClicked4] = useState(false);
    const [clicked5, setClicked5] = useState(false);

  //    FAQ SECTION
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleClick2 = () => {
    setClicked2(!clicked2);
  };
  const handleClick3 = () => {
    setClicked3(!clicked3);
  };
  const handleClick4 = () => {
    setClicked4(!clicked4);
  };
  const handleClick5 = () => {
    setClicked5(!clicked5);
  };


  return (
    <div>
      <section id="contact">
        <Container>
          <div className="contactCont">
            <div className="ourFaq">
              <h6>OUR FAQ</h6>
              <h1>
                Frequently Asked <br /> Questions
              </h1>
              <br />
              <p>
                Frequently Asked Questions (FAQ) - Your Comprehensive and
                Invaluable Resource Providing Prompt and Enlightening Answers to
                an Array of Common Queries
              </p>
              <br />
              <div className="questionsCont">
                <div className="questions" onClick={handleClick}>
                  <h6>What types of CNC projects do you specialize in?</h6>
                  <h6>
                    {clicked ? (
                      <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} />
                    )}
                  </h6>
                </div>
                <p className={`answer ${clicked ? "clickedAnswer" : ""}`}>
                  At CNC PROTOTYPE MACHINE, INC., we specialize in various CNC
                  projects, including rapid prototyping, custom parts
                  manufacturing, and batch production. Our expertise extends to
                  multiple industries, catering to aerospace, automotive,
                  electronics, and more.
                </p>
              </div>
              <div className="questionsCont">
                <div className="questions" onClick={handleClick2}>
                  <h6>How long have you been in the CNC industry?</h6>
                  <h6>
                    {" "}
                    {clicked2 ? (
                      <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} />
                    )}
                  </h6>
                </div>
                <p className={`answer ${clicked2 ? "clickedAnswer" : ""}`}>
                  We have been serving the CNC industry for 15 years. With our
                  extensive experience, we have successfully completed numerous
                  projects, earning a reputation for precision engineering and
                  innovation.
                </p>
              </div>
              <div className="questionsCont">
                <div className="questions" onClick={handleClick3}>
                  <h6>How do you ensure quality in CNC projects?</h6>
                  <h6>
                    {" "}
                    {clicked3 ? (
                      <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} />
                    )}
                  </h6>
                </div>
                <p className={`answer ${clicked3 ? "clickedAnswer" : ""}`}>
                  Quality is paramount to us. We implement strict quality
                  control measures, utilize state-of-the-art CNC technology, and
                  have a team of skilled engineers who meticulously inspect
                  every component. Our dedication to excellence guarantees
                  top-notch results.
                </p>
              </div>
              <div className="questionsCont">
                <div className="questions" onClick={handleClick4}>
                  <h6>
                    {" "}
                    Can you handle both small and large-scale CNC projects?
                  </h6>
                  <h6>
                    {" "}
                    {clicked4 ? (
                      <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} />
                    )}
                  </h6>
                </div>
                <p className={`answer ${clicked4 ? "clickedAnswer" : ""}`}>
                  Absolutely. We have the capability to handle CNC projects of
                  various sizes. Whether it's a small prototype or a large-scale
                  production run, we have the expertise, technology, and
                  resources to deliver exceptional results.
                </p>
              </div>
              <div className="questionsCont">
                <div className="questions" onClick={handleClick5}>
                  <h6>
                    How can I request a consultation or get a quote for my CNC
                    project?
                  </h6>
                  <h6>
                    {" "}
                    {clicked5 ? (
                      <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} />
                    )}
                  </h6>
                </div>
                <p className={`answer ${clicked5 ? "clickedAnswer" : ""}`}>
                  To request a consultation or get a quote for your CNC project,
                  simply reach out to us through the contact information
                  provided on our website. Our team will be delighted to discuss
                  your requirements, address any further inquiries, and provide
                  you with the necessary details.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
