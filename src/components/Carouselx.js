import React,{useEffect} from 'react';
//import imgMukadimah from './images/mukadimah.jpg';
//import imgBrands from './images/fishop-brands.png';
import img1 from './images/23062.jpg';
import img2 from './images/25710.jpg';
import img3 from './images/8551.jpg';
//import imgStore from './images/Fishop_store2.jpg';
//import $ from 'jquery';
//import ReactDOM from 'react-dom';
//import {Carousel} from 'react-bootstrap';

const Carouselx=()=>{

    useEffect(() => {

    }, []);

    
    return(
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active imagebox">
          <img src={img1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div className="carousel-item imagebox">
          <img src={img2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="carousel-item imagebox">
          <img src={img3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    );
}

export default Carouselx;




        {/*<div>

        <Carousel>
        <Carousel.Item>
          <div className="imagebox">
            <img
            className="d-block w-100 carox"
            src={img1}
            alt="First slide"
          />
          </div>

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="imagebox">
            <img
              className="d-block w-100 carox"
              src={img2}
              alt="Second slide"
            />          
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="imagebox">
            <img
              className="d-block w-100 carox"
              src={img3}
              alt="Third slide"
            />          
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

    </div>*/}