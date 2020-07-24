import React from 'react';
import imgBanner from './images/fish-banner.jpg';
import { 
    Image,
  } from 'react-bootstrap';


const Botbanner=()=>{
    return(
        <div className="botBanner">
            <Image src={imgBanner} className="imgBotBanner" />
        </div>
    )
}

export default Botbanner;