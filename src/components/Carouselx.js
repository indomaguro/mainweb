import React,{useEffect} from 'react';
import imgMukadimah from './images/mukadimah.jpg';
//import $ from 'jquery';
//import ReactDOM from 'react-dom';
import { 
    Carousel
  } from 'react-bootstrap';

const Carouselx=()=>{

    useEffect(() => {

    }, []);

    
    return(
        <div className="">

        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgMukadimah}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgMukadimah}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
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