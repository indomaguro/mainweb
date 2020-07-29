import React,{Component} from 'react';
import Botbanner from '../Botbanner';
import{
    Container,
    Row,
    Col,
    Image, 
} from 'react-bootstrap';

import imgDadu from '../images/unagi.jpg';
import Carouselx from '../Carouselx';

class Home extends Component{
    render(){
        const datax=[1,2,3];
        return(
            <div>

            <Carouselx/>


            <Container className="eat-drink">
            <Row>
            {
              datax.map((value,index)=>{
                return(
                  <Col xs={6} md={4} key={index}>
                    <Image src={imgDadu} thumbnail />
                  </Col>
                );
              })
            }
            </Row>
      
          </Container>        
      
          <div>
            <Container>
              <Row>
                <Col>
                <iframe title="xx23324324" src="https://www.google.com/maps/embed?pb=!4v1596012490423!6m8!1m7!1sCAoSLEFGMVFpcFBfSktEVnJTZ1k3dWNFOHNQUXQ3WHN1dnR3ckVpZVZESXc5MWg3!2m2!1d-6.101273366840912!2d106.8001694477426!3f260!4f10!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                
                </Col>
              </Row>
            </Container>
          </div>      
      
      
          <div className="memberpart">
          <Container>
            <Row>
              <Col>
                <p>
                It’s probably been said a thousand times, and it’s true: running a membership site allows you to generate recurring revenue. Members pay a monthly (or yearly) fee in exchange for access to your content, which also means you can constantly build upon your revenue every time you get more signups. But, it’s not just that; membership revenue can also be more predictable and reliable than some other business models. This is because memberships are ongoing unless cancelled, and consequently, your revenue from memberships doesn’t tend to fluctuate as much as revenue from one-off purchases.
                </p>
              </Col>
              <Col></Col>
            </Row>
          </Container>      
          </div>

                <Botbanner/>
            </div>
        )
    }
}

export default Home;