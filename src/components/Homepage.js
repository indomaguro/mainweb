import React,{useState,useEffect} from 'react';
import image1 from './images/mukadimah.jpg';
import Carouselx from './Carouselx';
import imgDadu from './images/dadu.jpg';
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

const Homepage=()=>{
    useEffect(()=>{

      // fix menu when passed
      
    });
    return(
        <div>
     
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Carouselx/>

      <Container className="eat-drink">
        <Row>
          <Col xs={6} md={4}>
            <Image src={imgDadu} rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src={imgDadu} rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src={imgDadu} rounded />
          </Col>
        </Row>
      </Container>        




        </div>
    );
}

export default Homepage;