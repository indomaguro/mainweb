import React,{Component} from 'react';import{
    Container,
    Row,
    Col,
    Image, 
    Form,
    Button,
    //Card,
    //CardColumns,
} from 'react-bootstrap';
//import imgDadu from '../images/unagi.jpg';
import imgSeafood from '../images/banner-seafood.png';
import Client from 'shopify-buy';
import {Helmet} from "react-helmet";

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
    domain: process.env.REACT_APP_SHOPIFY_URL,
    storefrontAccessToken: process.env.REACT_APP_STOREFRONT_ACCESS_TOKEN
  });
  

class Shop extends Component{

    state={
        products:[],
        productTypes:[],
        productType:'All',
    }


    componentDidMount(){

        client.product.fetchAll(24)
        .then((products) => {
            // Do something with the products
            //console.log(products);
            this.setState({products});

            let productTypes=products.map((tp,idx)=>{
                return tp.productType;
            });

            productTypes=productTypes.filter((tp,idx)=>productTypes.indexOf(tp)===idx);

            //console.log(productTypes);

            this.setState({productTypes});

        });



        //productTypes=[...new Set(productTypes)];

        //this.setState({productTypes});

        //console.log(productTypes);
        
    }

    changeType=event=>{
        this.setState({productType:event.target.value});
        console.log(event.target.value+' clicked !');
    }

    render(){
        //const datax=[1,2,3,4,5,6,7,8,9,10];
        return(
            <div>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>My Title</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                    <meta name="description" content="Shop page set description with react-helmet" />
                </Helmet>

                <div className="generalBanner">
                    <Image src={imgSeafood} className="imageFull" />
                </div>
                <Container fluid>
                    <div className="shop-two-frames">
                        <div className="shop-first-frame">
                            <h4>Filter</h4>

                            <div>
                                <select className="product-type" onChange={(event)=>this.changeType(event)}>
                                    <option value="All">All</option>
                                {
                                    this.state.productTypes.map((tp,i)=>{
                                        return (<option key={i}>{tp}</option>
                                        );
                                    })
                                }
                                </select>
                            </div>

                            <div>
                                Type: {this.state.productType}
                            </div>

                            <h4>Search</h4>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Label>Keyword</Form.Label>
                                <Form.Control type="text" placeholder="Enter keyword" />
                                <Form.Text className="text-muted">
                                    Result will show related to Product Type choosen.
                                </Form.Text>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                Submit
                                </Button>
                            </Form>



                        </div>
                        <div className="shop-second-frame">
                            <h4>Item</h4>



                            

                            <div className="shop-list-item">
                            {
                              this.state.products.map((data,index)=>{
                                return(
                                    <div key={data.id} className="shop-item">
                                    <Image src={data.images.map(x=>x.src)[0]} alt={index} rounded fluid className="shop-item-image"/>
                                    <div class="shop-item-title shop-item-text">{data.title}</div>
                                    <div class="shop-item-price shop-item-text">IDR {data.variants.map(x=>x.price)[0]}</div>
                                    </div>   
                                );
                              })
                            }

                      
                            </div>


                        </div>
                    </div>    
                </Container>

            </div>
        )
    }
}

export default Shop;