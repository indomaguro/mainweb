import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Helmet} from "react-helmet";

const NewsDetail=()=>{
    const {newsid}=useParams();
    const [data,setData]=useState({});

    const getSelfUrl=()=>{
        return "result: ";
    }

    useEffect(()=>{
        try {
            //const response= axios.get('http://localhost:8000/store/');
            //console.log('RESPONSE: '+JSON.stringify(response));
          axios.get(`http://localhost:8000/news/${newsid}/`)
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
        <div className="newsdetail-page">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{data.title}</title>
                <link rel="canonical" href={`http://localhost:8000/news/${newsid}/`} />
                <meta name="description" content={{ __html: data.content }}/>
            </Helmet>

            <div className="container">
                <div className="text-center bg-dark"><img src={data.cover} className="img-fluid" /></div>
                <div className=""><h3>{data.title}</h3></div>
                <p className="store-desc-pXXX py-4"><div dangerouslySetInnerHTML={{ __html: data.content }} /></p>
                <div></div>
            </div>

        </div>
    );
}
export default NewsDetail;