import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import imgBanner from '../images/fish-banner.jpg';
import imgSalmon from '../images/korean-bapsang.jpg';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Store=()=>{
    let dummy=[1,2,3];
    const {storeid}=useParams();
    const [data,setData]=useState({});

    /*const gdata=(xname)=>{
        let data={};
        switch(xname){
            case 'nama-sushi':
                data={
                    name:'NAMA SUSHI',
                    address: 'Emporium Pluit Mall, Lantai Ground Jl. Pluit Selatan Raya, Pluit, Penjaringan, Jakarta Utara',
                    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                };
                break;
            case 'shabu-masa':
                data={
                    name:'SHABU MASA',
                    address:'Grey Building, Lantai 5 Jl. Tuna Raya No. 5, Penjaringan, Jakarta Utara',
                    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                };
                break;
            case 'sushi-masa':
                data={
                    name:'SUSHI MASA',
                    address:'Grey Building, Lantai 3 Jl. Tuna Raya No. 5, Penjaringan, Jakarta Utara',
                    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                };
                break;
            default:
                data={
                    name:'RODIN PATISERRIE',
                    address:'Grey Building, Lantai 2 Jl. Tuna Raya No. 5, Penjaringan, Jakarta Utara',
                    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                };
        }
        return data;
    }*/

    useEffect(()=>{
        console.log(`Store NAME: ${storeid}`);
        //console.log(gdata(storename));

        try {
            //const response= axios.get('http://localhost:8000/store/');
            //console.log('RESPONSE: '+JSON.stringify(response));
          axios.get(`http://localhost:8000/store/${storeid}/`)
          .then(res => {
            const response = res.data;
            //this.setState({stores:response})
            setData(response);
            console.log(response);
          })
        } catch (error) {
          console.error(error);
        }


    },[]);

    return(
        <div className="store-page">
            <div className="store-banner">
                <img src={imgBanner} alt="" className="store-banner-img" />
            </div>
            <div className="container">
                <div class="btn-group store-navigator" role="group" aria-label="Basic example">
                    <a href="#store-gallery-part" class="btn btn-sm btn-outline-info"><i class="fas fa-image"></i>  Gallery</a>
                    <a href="#store-promo-part" class="btn btn-sm btn-outline-info"><i class="fas fa-calendar-alt"></i>  Event & Promo</a>
                    <a href="#store-location-part" class="btn btn-sm btn-outline-info"><i class="fas fa-map-marker-alt"></i>  Location</a>
                </div>

                <div className="store-desc">
                    <h3>{data.title}</h3>
                    
                    <dev className="store-desc-address text-info"><i class="fas fa-map-marker-alt"></i>  {data.address}</dev>
                    <p className="store-desc-p"><div dangerouslySetInnerHTML={{ __html: data.description }} /></p>
                </div>
            </div>

            <div className="container-fluidXXX store-gallery bg-light" id="#store-gallery-part">
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
                                <img className="store-promo-item-image img-thumbnailx rounded" alt="" src={imgSalmon}/>
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
                <iframe className="roundedXXX" title="21313dsdfsf" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6043.8084976707705!2d106.79800191572009!3d-6.101332395581961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1dc953df9c91%3A0xf76033953c8acd11!2sSushi%20Masa!5e1!3m2!1sid!2sid!4v1596710537407!5m2!1sid!2sid" width="100%" height="300" frameborder="0" style={{border:0,}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>

        </div>
    )
}
{/*
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.74532613645!2d106.80605034999999!3d-6.105594199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1dc953df9c91%3A0xf76033953c8acd11!2sSushi%20Masa!5e0!3m2!1sid!2sid!4v1596795802072!5m2!1sid!2sid" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
*/}
export default Store;