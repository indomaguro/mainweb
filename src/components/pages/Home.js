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


            <Container className="eat-drink">
            <div className="storeWeb">

              <a className="infoStoreWeb" href="/">
                <div className="imgStoreWeb">
                  <Image src={imgNamasushi} className="imageItem" />
                </div>
                <div className="titleStoreWeb">
                  <p>Nama Sushi</p>
                </div>
              </a>

              <a className="infoStoreWeb" href="/">
                <div className="imgStoreWeb">
                  <Image src={imgRodin} className="imageItem" />
                </div>
                <div className="titleStoreWeb">
                  <p>Rodin Patiserrie</p>
                </div>
              </a>

              <a className="infoStoreWeb" href="/">
                <div className="imgStoreWeb">
                  <Image src={imgShabumasa} className="imageItem" />
                </div>
                <div className="titleStoreWeb">
                  <p>Shabu Masa</p>
                </div>
              </a>              

              <a className="infoStoreWeb" href="/">
                <div className="imgStoreWeb">
                  <Image src={imgSushimasa} className="imageItem" />
                </div>
                <div className="titleStoreWeb">
                  <p>Sushi Masa</p>
                </div>
              </a>         

            </div> 
      
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
                <Image src={imgDiscountMember} className="memberImage" />
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