import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Helmet} from "react-helmet";

const NewsDetail=()=>{
    const {newsid}=useParams();
    const [data,setData]=useState({});
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
                <title>News Detail</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Shop page set description with react-helmet" />
            </Helmet>


            <h1>{data.title}</h1>
        </div>
    );
}
export default NewsDetail;