import React,{Component} from 'react';import{
    Container,
    Row,
    Col,
    Image, 
    Form,
    Button,
    Card,
} from 'react-bootstrap';
//import imgDadu from '../images/unagi.jpg';
import imgSeafood from '../images/banner-seafood.png';
import Client from 'shopify-buy';

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
    domain: 'fishop-indonesia.myshopify.com',
    storefrontAccessToken: 'b7ab11888030f54d1cffc844820e2fc0'
  });
  

class Shop extends Component{

    state={
        products:[],
    }


    componentDidMount(){
        // Fetch all products in your shop
        client.product.fetchAll(24)
        .then((products) => {
            // Do something with the products
            console.log(products);
            this.setState({products});
        });
        
    }

    getProduct=(productId)=>{
        let pr='';
        client.product.fetch(productId)
        .then((prd)=>{
            //console.log(prd.images[0]);
            let xpr=prd.images[0];
            if(xpr && xpr.src){
                pr=xpr.src;
                //console.log(pr);
            }
        });
        return pr.toString();
    }

    render(){
        //const datax=[1,2,3,4,5,6,7,8,9,10];
        return(
            <div>
                <div className="generalBanner">
                    <Image src={imgSeafood} className="imageFull" />
                </div>
                <Container>

                    <Row>
                        <Col xs lg="3">
                            <h4>Filter</h4>

                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                                </Form.Group>
                            
                                <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                Submit
                                </Button>
                            </Form>



                        </Col>
                        <Col>
                            <h4>Item</h4>



                            <div className="eat-drink">
                            <Row>
                            {
                              this.state.products.map((data,index)=>{
                                return(
                                  <Col xs={6} md={4} key={data.id}>
                                    <Card style={{ width: '17rem',margin:'10px',boxShadow:'5px 5px 5px #ddd' }} className="shop-item">
                                        <Card.Img variant="top" src={data.images.map(x=>x.src)[0]} alt={index} />
                                        <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text>
                                        Price: {data.variants.map(x=>x.price)[0]}
                                        </Card.Text>
                                            <div></div>
                                        </Card.Body>
                                    </Card>

                                  </Col>
                                );
                              })
                            }
                            </Row>
                      
                          </div>   

                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Shop;