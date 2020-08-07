import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
//  Link,
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Member from './components/pages/Member';
import Shop from './components/pages/Shop';
import News from './components/pages/News';
import About from './components/pages/About';
import {Helmet} from "react-helmet";
import Product from './components/pages/Product';
import Store from './components/pages/Store';

function App() {
  
  return (
    <Router>

      <Helmet>
          <meta charSet="utf-8" />
          <title>Foreat - Homey Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="Shop page set description with react-helmet" />
      </Helmet>
{/*
      <Navbar  bg="light" variant="light" expand="lg" sticky="top" >
        <Navbar.Brand href="/">MShop Indonesia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <NavDropdown title="EAT & DRINK" id="basic-nav-dropdown">
              <NavDropdown.Item href="/eat-drink/sushi-masa">Sushi Masa</NavDropdown.Item>
              <NavDropdown.Item href="/eat-drink/rodin">Rodin Patiserrie</NavDropdown.Item>
              <NavDropdown.Item href="/eat-drink/shabu-masa">Shabu Masa</NavDropdown.Item>
              <NavDropdown.Item href="/eat-drink/nama-sushi">Nama Sushi</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/eat-drink/">Show all</NavDropdown.Item>
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
  */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand text-info" href="/">
        <i class="fas fa-utensils"></i>  FOREAT
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-info" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                EAT & DRINK
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item text-info" href="/eat-drink/sushi-masa">Sushi Masa</a>
                <a className="dropdown-item text-info" href="/eat-drink/rodin">Rodin Patiserrie</a>
                <a className="dropdown-item text-info" href="/eat-drink/shabu-masa">Shabu Masa</a>
                <a className="dropdown-item text-info" href="/eat-drink/nama-sushi">Nama Sushi</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-info" href="/eat-drink">Show all</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-info" href="/member">MEMBERSHIP</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-info" href="https://fishop.co.id/" target="_blank">SHOP</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-info" href="/news">NEWS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-info" href="/about">ABOUT</a>
            </li>
          </ul>
{/*
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
          </form>
*/}
          <div className=" my-2 my-lg-0">
            <a className="nav-link text-info" href="/login"><i class="fas fa-user-circle"></i>  Join / Login</a>
          </div>
        </div>
      </nav>  

      <div className="page-space">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} exact />
        </Switch>

        <Route path="/member" component={Member} exact />
        <Route path="/shop-promo" component={Shop} exact />
        <Route path="/news" component={News} exact />
        <Route path="/about" component={About} exact />
        <Route path="/product/:id" component={Product} exact />
        <Route path="/eat-drink/:storename" component={Store} exact />
      </div>

      <Footer/>




    </Router>
  );
}

export default App;
