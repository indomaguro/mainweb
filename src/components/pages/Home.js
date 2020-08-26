import React,{Component} from 'react';
import Botbanner from '../Botbanner';

//import imgDadu from '../images/unagi.jpg';
import Carouselx from '../Carouselx';
import imgNamasushi from '../images/web-namasushi.jpg';
import imgRodin from '../images/web-rodin.jpg';
import imgShabumasa from '../images/web-shabumasa.jpg';
import imgSushimasa from '../images/web-sushimasa.jpg';
import imgDiscountMember from '../images/discount-member.jpg';

import axios from 'axios';


class Home extends Component{
  state={
    stores:[],
    news:[],
    slider:[],
  }

  componentDidMount(){
      //console.log('TEEEESSSSTTIIIINNNNGGGGGG...!!!!!');
    try {
        //const response= axios.get('http://localhost:8000/store/');
        //console.log('RESPONSE: '+JSON.stringify(response));
      axios.get(`http://localhost:8000/store/?query={id, title, cover, isActive}`)
      .then(res => {
        const response = res.data;
        this.setState({stores:response})
        //console.log(response);
      })
    } catch (error) {
      console.error(error);
    }


    try {
      axios.get(`http://localhost:8000/news/?query={id, title, cover, created, isActive}`)
      .then(res => {
        const response = res.data;
        this.setState({news:response})
        //console.log(response);
      })
    } catch (error) {
      console.error(error);
    }

  }

    render(){
        //const datax=[1,2,3,4,5,6];

        return(
            <div>

            <Carouselx/>


            <div className="container eat-drinkXX py-3">
            <div className="row storeWebXX">
            {
              this.state.stores.map((data,x)=>{
                if(data.isActive==true){
                  return(
                    <a href={`/eat-drink/${data.id}`} className="col home-store-collection" key={x} >
                    <div className="imgStoreWebXX">
                      <img src={data.cover} className="rounded-circle img-thumbnail"  />
                    </div>
                    <div className="titleStoreWebXX">
                      <p className="text-info">{data.title}</p>
                    </div>
                  </a>                  
                  )                  
                }

              })
            }
            </div> 
          </div>       
      
      
          <div className="memberpart bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-6 memberpartItem">
                  <img src={imgDiscountMember} className="img-fluid rounded home-member-image" />
                </div>
                <div className="col-md-6 home-memberpartItem text-justify">
                  <h3>Membership Program</h3>
                  <p>
                  It’s probably been said a thousand times, and it’s true: running a membership site allows you to generate recurring revenue. Members pay a monthly (or yearly) fee in exchange for access to your content, which also means you can constantly build upon your revenue every time you get more signups. But, it’s not just that; membership revenue can also be more predictable and reliable than some other business models. This is because memberships are ongoing unless cancelled, and consequently, your revenue from memberships doesn’t tend to fluctuate as much as revenue from one-off purchases.
                  </p>
                  <div>
                    <button className="btn btn-outline-info">Learn More</button>
                    &nbsp;
                    <button className="btn btn-info">Join Now</button>
                  </div>
                </div>
              </div>   
            </div>
          </div>

          <div className="container">
          <h3>Member Benefits</h3>
          <div className="row">
            <div className="benefit-itemXXX col-md-6">
              <div className="bg-img-1XXX">
                <img src={imgDiscountMember} className="img-fluid rounded"/>
              </div>
              <div className="benefit-infoXXX">
                <p>This is because memberships are ongoing unless cancelled, and consequently, your revenue from memberships doesn’t tend to fluctuate as much as revenue from one-off purchases.</p>
              </div>            
            </div>
            <div className="benefit-itemXXX col-md-6">
              <div className="bg-img-1XXX">
                <img src={imgDiscountMember} className="img-fluid rouded" />
              </div>
              <div className="benefit-infoXXX">
                <p>This is because memberships are ongoing unless cancelled, and consequently, your revenue from memberships doesn’t tend to fluctuate as much as revenue from one-off purchases.</p>
              </div>            
            </div>
          </div>          
          </div>

          
          <div className="newsPartXXX bg-light">
            <div className="container">
              <h3>News</h3>
              <div className="row justify-content-center">

              {
                this.state.news.slice(0,3).map((data,x)=>{
                  if(data.isActive==true){
                    return(
                      <a className="newsItemXXX col-md-4" href={`/news-detail/${data.id}`} key={x}>  
                      <div className="home-news-image-partXXX bg-info rounded ">
                        <img src={data.cover} className="home-news-imageXXX p-1 img-fluid"/>
                      </div>
                      <div className="newInfoXXX">
                        <div className="font-weight-lighter">{data.created}</div>
                        <div className="text-info">{data.title}</div>
                      </div>
                    </a>             
                    )         
                  }
  
                })
              }
              </div>
              <div className="d-flex justify-content-center py-3">
                <a href="/news/" className="btn btn-sm btn-info">Show all</a>
              </div>
            </div>
          </div>
          

          <div className="container">
                <iframe title="xx23324324" src="https://www.google.com/maps/embed?pb=!4v1596012490423!6m8!1m7!1sCAoSLEFGMVFpcFBfSktEVnJTZ1k3dWNFOHNQUXQ3WHN1dnR3ckVpZVZESXc5MWg3!2m2!1d-6.101273366840912!2d106.8001694477426!3f260!4f10!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                
          </div>      
      

                <Botbanner/>
            </div>
        )
    }
}

export default Home;