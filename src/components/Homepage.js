import React,{useState,useEffect} from 'react';
import image1 from './images/mukadimah.jpg';
import Carouselx from './Carouselx';
import imgDadu from './images/unagi.jpg';
import { 
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';


import { 
  Button, 
  Nav,
  Navbar,
  Form,
  NavDropdown,
  FormControl 
} from 'react-bootstrap';
import Botbanner from './Botbanner';
import Footer from './Footer';

const Homepage=()=>{
    useEffect(()=>{

      // fix menu when passed
      
    });

    const datax=[1,2,3];

    return(
        <div>
     
        <Navbar  bg="dark" variant="dark" expand="lg" sticky="top" >
        <Navbar.Brand href="#home">MShop Indonesia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavDropdown title="EAT & DRINK" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">MEMBERSHIP</Nav.Link>
            <Nav.Link href="#link">SHOP</Nav.Link>
            <Nav.Link href="#link">NEWS</Nav.Link>
            <Nav.Link href="#link">ABOUT</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Carouselx/>

      <Container className="eat-drink">
        <Row>
        {
          datax.map((value,index)=>{
            return(
              <Col xs={6} md={4}>
                <Image src={imgDadu} thumbnail />
              </Col>
            );
          })
        }
        </Row>

      </Container>        




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


      <Footer/>

        </div>
    );
}

export default Homepage;