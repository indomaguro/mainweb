import React,{Component} from 'react';
import imgSalmon from '../images/korean-bapsang.jpg';

class News extends Component{
    render(){
        return(
            <div className="news-page container">
                <h3>News</h3>
                <div className="news-latest-part">
                    <div className="news-latest-image-frame">
                        <img src={imgSalmon} alt="" className="news-latest-image img-thumbnail" />
                    </div>
                    <div className="news-latest-desc-frame">
                        <div className="news-latest-date">WED, 17 JUN 2020</div>
                        <h4 className="news-latest-title">
                            FOREAT LATEST MEMBERSHIP PROGRAM
                        </h4>
                        <div className="news-latest-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ...
                        </div>
                        <a href="" className="text-info">READ MORE ></a>
                    </div>
                </div>
                <div className="news-before-part"></div>
            </div>
        )
    }
}

export default News;