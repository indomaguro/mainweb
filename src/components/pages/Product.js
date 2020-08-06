import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Client from 'shopify-buy';

const Product=()=>{
    //const [product,setProduct]=useState([]);
    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');
    const [img,setImg]=useState('');
    const [imgs,setImgs]=useState([]);
    const [variants,setVariants]=useState([]);
    const [choosenPrice,setChoosenPrice]=useState('');

    const {id}=useParams();
    
    // Initializing a client to return content in the store's primary language
    const client = Client.buildClient({
        domain: process.env.REACT_APP_SHOPIFY_URL,
        storefrontAccessToken: process.env.REACT_APP_STOREFRONT_ACCESS_TOKEN
    });

    const getData=()=>{
        client.product.fetch(id)
        .then((prd) => {
            //setProduct(prd);
            setTitle(prd.title);
            setDesc(prd.description);
            setImg(prd.images[0].src);
            let igs=prd.images.map(x=>x.src);
            setImgs(igs);
            
            setVariants(prd.variants.map(x=>x));//set only if x.available===true on the next step

            console.log(prd);
        });
    }
    
    useEffect(()=>{
        getData();
        //console.log('hasil: '+product);
    },[]);

    const clickVariant=(e,id,price)=>{
        console.log(price);
        setChoosenPrice(price);
        return null;
    }

    return(
        <div className="product-main container">
           
            <div className="product-mid-part">
                <div className="product-images">
                    <img className="img-thumbnail" src={img} alt="" />
                    <div className="product-image-list">
                        {
                            imgs.map((im,ix)=>{
                                return(
                                    <img key={ix} className="img-thumbnail product-image-option" alt="" src={im} />
                                );
                            })
                        }
                    </div>
                </div>
                <div className="product-actions">
                    <div className="product-title"><h3>{title}</h3></div>
                    <div className="product-var-title">
                        {
                            variants.map((vr,ix)=>{
                                return(
                                    <div  key={ix} className="product-buttons-variant">
                                    <button onClick={(e)=>clickVariant(e,vr.id,vr.price)} className="btn btn-info" data-price={vr.price}>{vr.title}</button>
                                    &nbsp;
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="product-var-price"><h4>{choosenPrice}</h4></div>
                </div>            
            </div>

            <div className="product-desc">{desc}</div>
        </div>
    )
}

export default Product;