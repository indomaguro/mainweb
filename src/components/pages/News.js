import React,{Component} from 'react';
import imgSalmon from '../images/korean-bapsang.jpg';

class News extends Component{
    render(){
        const dummy=[1,2,3,4,5,6];

        return(
            <div className="news-page container">
                <h3>News</h3>
                <div className="news-latest-part">
                    <div className="news-latest-image-frame">
                        <img src={imgSalmon} alt="" className="news-latest-image img-thumbnail" />
                    </div>
                    <div className="news-latest-desc-frame">
                        <div className="news-latest-date font-weight-lighter">WED, 17 JUN 2020</div>
                        <div className="news-latest-title text-info text-uppercase font-weight-bold">
                            FOREAT LATEST MEMBERSHIP PROGRAM
                        </div>
                        <div className="news-latest-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ...
                        </div>
                        <a href="" className="text-info text-decoration-none">READ MORE <i className="fas fa-chevron-circle-right"></i></a>
                    </div>
                </div>
                <div className="news-before-part">
                {
                    dummy.map((data,idx)=>{
                        return(
                            <div className="news-before-item" key={idx}>
                                <div className="nbi-image-frame"><img className="nbi-image " src={imgSalmon} alt=""/></div>
                                <div className="nbi-date font-weight-lighter">WED, 17 JUN 2020</div>
                                <div className="nbi-title text-info text-uppercase font-weight-bold">News Title {data}</div>
                                <div className="nbi-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
                                <a href="/" className="nbi-more text-info text-decoration-none">READ MORE <i className="fas fa-chevron-circle-right"></i></a>
                            </div>
                            )
                    })
                }
                </div>
                <div className="nbp-btn-add"><button className="btn btn-sm btn-outline-info">LOAD MORE</button></div>
            </div>
        )
    }
}

export default News;