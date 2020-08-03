import React,{Component} from 'react';
import Botbanner from '../Botbanner';
import{
    Container,
    Row,
    Col,
    Image,
    Button, 
} from 'react-bootstrap';

//import imgDadu from '../images/unagi.jpg';
import Carouselx from '../Carouselx';
import imgNamasushi from '../images/web-namasushi.jpg';
import imgRodin from '../images/web-rodin.jpg';
import imgShabumasa from '../images/web-shabumasa.jpg';
import imgSushimasa from '../images/web-sushimasa.jpg';
import imgDiscountMember from '../images/discount-member.jpg';

class Home extends Component{
    render(){
        //const datax=[1,2,3,4,5,6];
        return(
            <div>

            <Carouselx/>


            <Container className="eat-drinkXX">
            <Row className="storeWebXX">

              <Col className="infoStoreWebXX" >
                <div className="imgStoreWebXX">
                  <Image src={imgNamasushi} thumbnail />
                </div>
                <div className="titleStoreWebXX">
                  <p>Nama Sushi</p>
                </div>
              </Col>

              <Col className="infoStoreWebXX" >
                <div className="imgStoreWebXX">
                  <Image src={imgRodin} thumbnail />
                </div>
                <div className="titleStoreWebXX">
                  <p>Rodin Patiserrie</p>
                </div>
              </Col>

              <Col className="infoStoreWebXX" >
                <div className="imgStoreWebXX">
                  <Image src={imgShabumasa} thumbnail />
                </div>
                <div className="titleStoreWebXX">
                  <p>Shabu Masa</p>
                </div>
              </Col>              

              <Col className="infoStoreWebXX" >
                <div className="imgStoreWebXX">
                  <Image src={imgSushimasa} thumbnail />
                </div>
                <div className="titleStoreWebXX">
                  <p>Sushi Masa</p>
                </div>
              </Col>         

            </Row> 
          </Container>       
      
      
          <div className="memberpart">
          <Container>
            <Row>
              <Col className="memberpartItem">
                <h3>Membership Program</h3>
                <p>
                It’s probably been said a thousand times, and it’s true: running a membership site allows you to generate recurring revenue. Members pay a monthly (or yearly) fee in exchange for access to your content, which also means you can constantly build upon your revenue every time you get more signups. But, it’s not just that; membership revenue can also be more predictable and reliable than some other business models. This is because memberships are ongoing unless cancelled, and consequently, your revenue from memberships doesn’t tend to fluctuate as much as revenue from one-off purchases.
                </p>
                <div>
                  <Button variant="outline-info">Learn More</Button>
                  &nbsp;
                  <Button variant="info">Join Now</Button>
                </div>
              </Col>
              <Col className="memberpartItem">
                <Image src={imgDiscountMember} thumbnail />
              </Col>
            </Row>
          </Container>      
          </div>

          <Container>     
          <div className="image-testing-1"></div>     
          <h3>Member Benefits</h3>
          <div className="bg-img-memberbenefit">
            <div className="benefit-item">
              <div className="bg-img-1">
                <Image src={imgDiscountMember} thumbnail/>
              </div>
              <div className="benefit-info">
                <p>This is because memberships are ongoing unless cancelled, and consequently, your revenue from memberships doesn’t tend to fluctuate as much as revenue from one-off purchases.</p>
              </div>            
            </div>
            <div className="benefit-item">
              <div className="bg-img-1">
                <Image src={imgDiscountMember} thumbnail />
              </div>
              <div className="benefit-info">
                <p>This is because memberships are ongoing unless cancelled, and consequently, your revenue from memberships doesn’t tend to fluctuate as much as revenue from one-off purchases.</p>
              </div>            
            </div>
            <div className="benefit-item">
              <div className="bg-img-1">
                <Image src={imgDiscountMember} thumbnail />
              </div>
              <div className="benefit-info">
                <p>This is because memberships are ongoing unless cancelled, and consequently, your revenue from memberships doesn’t tend to fluctuate as much as revenue from one-off purchases.</p>
              </div>            
            </div>
          </div>          
          </Container>

          
          <div className="newsPart">
            <Container>
            <h3>News</h3>
              <div className="newsItem">  
                <div className="newsImgPart">
                  <Image src={imgNamasushi} thumbnail/>
                </div>
                <div className="newInfo">
                  <h3>News title</h3>
                  <p>New highlight This is because memberships are ongoing unless cancelled, and consequently...</p>
                </div>
              </div>
              <div className="newsItem">  
                <div className="newsImgPart">
                  <Image src={imgRodin} thumbnail/>
                </div>
                <div className="newInfo">
                  <h3>News title</h3>
                  <p>New highlight This is because memberships are ongoing unless cancelled, and consequently...</p>
                </div>
              </div>
              <div className="newsItem">  
                <div className="newsImgPart">
                  <Image src={imgSushimasa} thumbnail/>
                </div>
                <div className="newInfo">
                  <h3>News title</h3>
                  <p>New highlight This is because memberships are ongoing unless cancelled, and consequently...</p>
                </div>
              </div>
              <Button variant="info">Show all</Button>
            </Container>
          </div>
          

          <div>
            <Container>
              <Row>
                <Col>
                <iframe title="xx23324324" src="https://www.google.com/maps/embed?pb=!4v1596012490423!6m8!1m7!1sCAoSLEFGMVFpcFBfSktEVnJTZ1k3dWNFOHNQUXQ3WHN1dnR3ckVpZVZESXc5MWg3!2m2!1d-6.101273366840912!2d106.8001694477426!3f260!4f10!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                
                </Col>
              </Row>
            </Container>
          </div>      
      

                <Botbanner/>
            </div>
        )
    }
}

export default Home;