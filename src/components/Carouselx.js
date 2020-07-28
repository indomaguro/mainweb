import React,{useEffect} from 'react';
import imgMukadimah from './images/mukadimah.jpg';
import imgBrands from './images/fishop-brands.png';
//import imgStore from './images/Fishop_store2.jpg';
//import $ from 'jquery';
//import ReactDOM from 'react-dom';
import { 
    Carousel
  } from 'react-bootstrap';

const Carouselx=()=>{

    useEffect(() => {

    }, []);

    
    return(
        <div>

        <Carousel>
        <Carousel.Item className="imagebox">
          <img
            className="d-block w-100 carox"
            src={imgMukadimah}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="imagebox">
          <img
            className="d-block w-100 carox"
            src={imgBrands}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="imagebox">
          <img
            className="d-block w-100 carox"
            src={imgMukadimah}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

        </div>
    );
}

export default Carouselx;