import React,{Component} from 'react';import{
    Container,
    Row,
    Col,
    Image, 
    Form,
    Button,
    Card,
} from 'react-bootstrap';
import imgDadu from '../images/unagi.jpg';
import imgSeafood from '../images/banner-seafood.png';

class Shop extends Component{
    render(){
        const datax=[1,2,3,4,5,6,7,8,9,10];
        return(
            <div>

                <Container>
                    <div>
                        <Image src={imgSeafood}/>
                    </div>
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
                              datax.map((value,index)=>{
                                return(
                                  <Col xs={6} md={4}>
                                    <Card style={{ width: '17rem',margin:'10px',boxShadow:'5px 5px 5px #ddd' }}>
                                        <Card.Img variant="top" src={imgDadu} />
                                        <Card.Body>
                                        <Card.Title>Aji Hiraki Butterfly</Card.Title>
                                        <Card.Text>
                                        Rp 11.000
                                        </Card.Text>
                                        
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