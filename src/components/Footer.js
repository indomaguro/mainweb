import React from 'react';
import { 
    Container,
    Row,
    Col,
  } from 'react-bootstrap';

const Footer=()=>{
    return(

        <div className="footerpart">
        <Container>
          <Row>
            <Col>
              <h3>MShop Indonesia</h3>
              <p>
              MShop Indonesia is a high-end grocery store that specialises in selling seafood (fresh or frozen), meat, frozen food and other kinds of ingredients essential for cooking!  
               
              </p>
            </Col>
            <Col>
                <h3>Explore</h3>
                <ul className="exp-link">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Home</a></li>
                </ul>
            </Col>
            <Col>
                <h3>Connect With Us !</h3>
                <i className="fas fa-phone-volume"></i> 021-2926-3576 or 0811-919-6688<br/>
                <i className="fab fa-whatsapp"></i> 0815-1913-1635<br/>
                <i className="fab fa-facebook"></i> fishop_jkt<br/>
                <i className="fab fa-instagram"> fishop.jkt</i>
            </Col>
          </Row>
        </Container>      
        </div>
  

    )
}

export default Footer;