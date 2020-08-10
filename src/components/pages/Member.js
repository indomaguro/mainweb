import React,{Component} from 'react';
import imgBrands from '../images/member-banner.jpg';
import imgPhone from '../images/member-phone.jpg';

class Member extends Component{
    render(){
        return(
            <div className="member-page">
                <div className="member-slide-frame">
                    <img className="member-slide-image" alt="" src={imgBrands} />
                </div>
                <div className="container member-calling">
                    <h3 className="mc-title text-center text-info">
                        THE GOOD LIFE AT YOUR FINGERTIPS
                    </h3>
                    <div className="mc-content text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="mc-image-frame text-center">
                        <img src={imgPhone} className="mc-image-mobile rounded-circle"/>
                    </div>
                    <div className="mc-button text-center">
                        <button className="btn btn-info">JOIN NOW <i class="fas fa-sign-in-alt"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Member;