import React, {useState} from 'react'
import { Container } from 'react-bootstrap'

export const Contact = () => {
    const [cliked, setCliked] = useState(false)
    const [cliked2, setCliked2] = useState(false)
    const [cliked3, setCliked3] = useState(false)
    const [cliked4, setCliked4] = useState(false)
    const [cliked5, setCliked5] = useState(false)

//    FAQ SECTION
    const handleClick = () => {
      setCliked(!cliked)
    }
    const handleClick2 = () => {
      setCliked2(!cliked2)
    }
    const handleClick3 = () => {
      setCliked3(!cliked3)
    }
    const handleClick4 = () => {
      setCliked4(!cliked4)
    }
    const handleClick5 = () => {
      setCliked5(!cliked5)
    }

    // FORM SECTION
    const handleSubmit = (e) => {
        e.preventDefault()
    }


  return (
    <div>
        <section id="contact">
            <Container>
                <div className="contactCont">
                    <div className="ourFaq">
                        <h6>OUR FAQ</h6>
                        <h1> Frequently Asked <br /> Question </h1> <br />
                        <p>Frequently Asked Questions (FAQ) - Your Comprehensive and Invaluable Resource Providing Prompt and Enlightening Answers to an Array of Common Queries</p> <br />
                        <div className="questionsCont">
                            <div className="questions" onClick={handleClick}>
                                <h6>What types of construction projects do you specialize in?</h6>
                                <h6> {cliked ? "unclicked" : "cliked"}</h6>
                            </div>
                            <p className={`answer ${cliked ? "clikedAnswer" : ""}`}> 
                            We specialize in various construction projects, including road construction, building construction, and bridge construction etc. Our expertise extends to both residential and commercial projects.
                            </p>
                        </div>
                        <div className="questionsCont">
                            <div className="questions" onClick={handleClick2}>
                                <h6>How long have you been in the construction industry?</h6>
                                <h6> {cliked2 ? "unclicked" : "cliked"}</h6>
                            </div>
                            <p className={`answer ${cliked2 ? "clikedAnswer" : ""}`}> 
                            We have been serving the construction industry for 10years. With our extensive experience, we have successfully completed numerous projects, earning a reputation for excellence.
                            </p>
                        </div>
                        <div className="questionsCont">
                            <div className="questions" onClick={handleClick3}>
                                <h6>How do you ensure safety on construction sites?</h6>
                                <h6> {cliked3 ? "unclicked" : "cliked"}</h6>
                            </div>
                            <p className={`answer ${cliked3 ? "clikedAnswer" : ""}`}> 
                            Safety is our utmost priority. We implement rigorous safety protocols, provide regular training to our employees, conduct thorough risk assessments, and maintain a safe working environment. We adhere to industry standards and regulations to minimize hazards.
                            </p>
                        </div>
                        <div className="questionsCont">
                            <div className="questions" onClick={handleClick4}>
                                <h6> Can you handle both small and large-scale projects?</h6>
                                <h6> {cliked4 ? "unclicked 4" : "cliked 4"}</h6>
                            </div>
                            <p className={`answer ${cliked4 ? "clikedAnswer" : ""}`}> 
                            Absolutely. We have the capability to handle projects of various sizes. Whether it's a small residential construction or a large-scale infrastructure project, we have the expertise, resources, and manpower to deliver successful outcomes.
                            </p>
                        </div>
                        <div className="questionsCont">
                            <div className="questions" onClick={handleClick5}>
                                <h6>How can I request a consultation or get a quote for my project?</h6>
                                <h6> {cliked5 ? "unclicked 5" : "cliked 5"}</h6>
                            </div>
                            <p className={`answer ${cliked5 ? "clikedAnswer" : ""}`}> 
                            To request a consultation or get a quote for your project, you can reach out to us through the contact information provided on our website. Our team will be happy to discuss your requirements, answer any further questions, and provide you with the necessary information.
                            </p>
                        </div>
                    </div>
                    <div className="contactForm">
                        <div>
                        <h6>GET IN TOUCH</h6>
                        <div className="detailContactform">
                            <h2>We Want To Hear From You!</h2>
                            <form onSubmit={handleSubmit}>
                                <input type="text"  placeholder='Your Name'/>
                                <input type="email" name="email" id="email" placeholder='Email Address' />
                                <input type="text" placeholder='Subject' />
                                <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message'></textarea>
                                <input type="submit" value="Submit" />
                            </form>
                    </div>
                    </div>
                    </div>
                </div>
            </Container>
        </section>
    </div>
  )
}
