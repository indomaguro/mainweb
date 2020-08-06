import React,{useState,useEffect} from 'react';
import imgBanner from '../images/fish-banner.jpg';
import imgSalmon from '../images/korean-bapsang.jpg';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Store=()=>{
    let dummy=[1,2,3,4];

    return(
        <div className="store-page">
            <div className="store-banner">
                <img src={imgBanner} alt="" className="store-banner-img" />
            </div>
            <div className="container">
                <div class="btn-group store-navigator" role="group" aria-label="Basic example">
                    <a href="#store-gallery-part" class="btn btn-sm btn-outline-secondary">Gallery</a>
                    <a href="#store-promo-part" class="btn btn-sm btn-outline-secondary">Event & Promo</a>
                    <a href="#store-location-part" class="btn btn-sm btn-outline-secondary">Location</a>
                </div>

                <div className="store-desc">
                    <h3>SUSHI MASA</h3>
                    
                    <h5>JAKARTA</h5>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>

            <div className="container-fluidXXX store-gallery" id="#store-gallery-part">
                <h3>Gallery</h3>
                <OwlCarousel
                    className="owl-themex"
                    loop
                    margin={10}
                >
                    <div class="item"><img src={imgSalmon} alt=""/></div>
                    <div class="item"><img src={imgSalmon} alt=""/></div>
                    <div class="item"><img src={imgSalmon} alt=""/></div>
                    <div class="item"><img src={imgSalmon} alt=""/></div>
                    <div class="item"><img src={imgSalmon} alt=""/></div>
                    <div class="item"><img src={imgSalmon} alt=""/></div>
                </OwlCarousel>
                <a href="/" className="btn btn-sm btn-info">VIEW MENU</a>
            </div>

            <div className="store-promo" id="#store-promo-part">
                <h3>PROMO</h3>
                <div className="store-promo-gallery">
                    {
                        dummy.map((x,i)=>{
                            return(
                                <div className="store-promo-item" key={i}>
                                <img className="store-promo-item-image img-thumbnailx" alt="" src={imgSalmon}/>
                                <h5>Promo title</h5>
                                <p>Promo desc promo desc promo desc</p>
                            </div>                                
                            );
                        })
                    }

                </div>
            </div>

            <div className="store-location" id="store-location-part">
                <h4>Location</h4>
                <iframe title="21313dsdfsf" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6043.8084976707705!2d106.79800191572009!3d-6.101332395581961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1dc953df9c91%3A0xf76033953c8acd11!2sSushi%20Masa!5e1!3m2!1sid!2sid!4v1596710537407!5m2!1sid!2sid" width="400" height="300" frameborder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>

        </div>
    )
}

export default Store;