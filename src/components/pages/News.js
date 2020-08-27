import React,{Component} from 'react';
import axios from 'axios';
import {Helmet} from "react-helmet";
import imgSalmon from '../images/korean-bapsang.jpg';

class News extends Component{
    state={
        news:[],
    }

    componentDidMount(){
        try {
            axios.get(`http://localhost:8000/news/`)
            .then(res => {
              const response = res.data;
              this.setState({news:response});
              console.log(response);
            })
          } catch (error) {
            console.error(error);
          }
    }

      
    render(){
        //const dummy=[1,2,3,4,5,6];

        return(
            <div className="news-page container">

            <Helmet>
                <meta charSet="utf-8" />
                <title>News</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Shop page set description with react-helmet" />
            </Helmet>


                <h3>News</h3>
{/*
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
*/}
                <div className="news-before-part">
                {
                    this.state.news.map((data,idx)=>{
                        return(
                            <a href={`/news/${data.slug}`} className="news-before-itemXXX shadow p-3 mb-5 bg-white rounded text-decoration-none" key={idx}>
                                <div className="nbi-image-frameXXX bg-info rounded text-center"><img className="nbi-imageXXX img-fluid" src={data.cover} alt=""/></div>
                                <div className="nbi-dateXXX font-weight-lighter">{data.created}</div>
                                <div className="nbi-titleXXX text-info text-uppercase font-weight-bold text-justify">{data.title}</div>
                                <div className="nbi-contentXXX text-justify">{data.content.slice(0,100).replace(/<[^>]*>?/gm, '')}</div>
                                <a href={`/news/${data.slug}`} className="nbi-moreXXX text-info text-decoration-none">READ MORE <i className="fas fa-chevron-circle-right"></i></a>
                            </a>
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