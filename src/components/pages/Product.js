import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Product=()=>{
    let {id}=useParams();
    return(
        <div className="product-main">
            <h3>Product Page id: {id}</h3>
        </div>
    )
}

export default Product;