import React, {useState} from 'react'
import { Container } from 'react-bootstrap'

export const Contact = () => {
    const [cliked, setCliked] = useState(false)

    const handleClick = () => {
      setCliked(!cliked)
    }
  return (
    <div>
        <Container>
            <div className="contactCont">
                <div className="ourFaq">
                    <h6>OUR FAQ</h6>
                    <h1> Frequently Asked <br /> Question </h1> <br />
                    <p>Dolor sit amet consectetur elit sed eiusmod tempor incidi dunt labore quis dolore magna aliqua enim ad minim veniam quis nostrud xercitation mini ullamco laboris nisi ut aliquip ex commodo.</p> <br />
                    <div className="questionsCont">
                        <div className="questions" onClick={handleClick}>
                            <h6>What you about say your Business palnning?</h6>
                            <h6> {cliked ? "unclicked" : "cliked"}</h6>
                        </div>
                        <p className={`answer ${cliked ? "clikedAnswer" : ""}`}> 
                           Our agency can only be as strong as our become a multinational firm, offering services and solutions. agenhave their businesses.
                        </p>
                    </div>
                </div>
                <div className="contactForm">
                    <h6>GET IN TOUCH</h6>
                </div>
            </div>
        </Container>
    </div>
  )
}
