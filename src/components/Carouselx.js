import React,{useEffect, useState} from 'react';
import {Carousel} from 'react-bootstrap';
import axios from 'axios';
//import img1 from './images/23062.jpg';
//import img2 from './images/25710.jpg';
//import img3 from './images/8551.jpg';

const Carouselx=()=>{
  const [slider,setSlider]=useState([]);

    useEffect(() => {

      try {
      axios.get(`http://localhost:8000/imageslider`)
      .then(res => {
        const response = res.data;
        setSlider(response);
        //console.log(response);
      })
    } catch (error) {
      console.error(error);
    }


    }, []);

    
    return(
      <Carousel>
      {
        /*HARUS GUNAKAN REACT-BOOSTRAP KARENA CAROUSEL MEMBUTUHKAN JAVASCRIPT YANG AKAN CRASH DENGAN REACTJS JIKA HANYA GUNAKAN BOOSTRAP VERSI BIASA*/
        slider.map((data,x)=>{
          if(data.isActive==true){
            return(
              <Carousel.Item key={x}>
              <div className="imagebox">
                <img
                className="d-block w-100 carox"
                src={data.picture}
                alt={data.title}
              />
              </div>
              </Carousel.Item>     
            )                  
          }

        })
      }
    </Carousel>
    );
}

export default Carouselx;