import React,{useEffect} from 'react';
import imgMukadimah from './images/mukadimah.jpg';
import imgBrands from './images/fishop-brands.png';
import img1 from './images/23062.jpg';
import img2 from './images/25710.jpg';
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
              src={img1}
              alt="Third slide"
            />          
          </div>
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