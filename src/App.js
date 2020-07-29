import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
//  Link,
} from 'react-router-dom';
import { 
  Button, 
  Nav,
  Navbar,
  Form,
  NavDropdown,
  FormControl,

} from 'react-bootstrap';

//import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Member from './components/pages/Member';
import Shop from './components/pages/Shop';
import News from './components/pages/News';
import About from './components/pages/About';

function App() {
  
  return (
    <Router>

      <Navbar  bg="dark" variant="dark" expand="lg" sticky="top" >
        <Navbar.Brand href="/">MShop Indonesia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <NavDropdown title="EAT & DRINK" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/member">MEMBERSHIP</Nav.Link>
            <Nav.Link href="/shop">SHOP</Nav.Link>
            <Nav.Link href="/news">NEWS</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <div className="page-space">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} exact />
        </Switch>

        <Route path="/member" component={Member} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/news" component={News} exact />
        <Route path="/about" component={About} exact />
      </div>

      <Footer/>




    </Router>
  );
}

export default App;
