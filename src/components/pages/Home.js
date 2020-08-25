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

  }

    render(){
        //const datax=[1,2,3,4,5,6];

        return(
            <div>

            <Carouselx/>


            <div className="container eat-drinkXX">
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
{/*
              <a href="/eat-drink/nama-sushi" className="col home-store-collection" >
                <div className="imgStoreWebXX">
                  <img src={imgNamasushi} className="rounded-circle img-thumbnail"  />
                </div>
                <div className="titleStoreWebXX">
                  <p className="text-info">Nama Sushi</p>
                </div>
              </a>

              <a href="/eat-drink/rodin" className="col home-store-collection" >
                <div className="imgStoreWebXX">
                  <img src={imgRodin} className="rounded-circle img-thumbnail" />
                </div>
                <div className="titleStoreWebXX">
                  <p className="text-info">Rodin Patiserrie</p>
                </div>
              </a>

              <a href="/eat-drink/shabu-masa" className="col home-store-collection" >
                <div className="imgStoreWebXX">
                  <img src={imgShabumasa} className="rounded-circle img-thumbnail" />
                </div>
                <div className="titleStoreWebXX">
                  <p className="text-info">Shabu Masa</p>
                </div>
              </a>              

              <a href="/eat-drink/sushi-masa" className="col home-store-collection" >
                <div className="imgStoreWebXX">
                  <img src={imgSushimasa} className="rounded-circle img-thumbnail" />
                </div>
                <div className="titleStoreWebXX">
                  <p className="text-info">Sushi Masa</p>
                </div>
              </a>         
        */}
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
            {/*<div className="benefit-itemXXX col-sm-4">
              <div className="bg-img-1XXX">
                <img src={imgDiscountMember} className="img-thumbnail" />
              </div>
              <div className="benefit-infoXXX">
                <p>This is because memberships are ongoing unless cancelled, and consequently, your revenue from memberships doesn’t tend to fluctuate as much as revenue from one-off purchases.</p>
              </div>            
        </div>*/}
          </div>          
          </div>

          
          <div className="newsPartXXX bg-light">
            <div className="container">
              <h3>News</h3>
              <div className="row">
                <div className="newsItemXXX col-md-4">  
                  <div className="newsImgPartXXX">
                    <img src={imgNamasushi} className="rounded img-fluid"/>
                  </div>
                  <div className="newInfoXXX">
                    <div className="font-weight-lighter">WED, 17 JUN 2020</div>
                    <h3 className="text-info">News title</h3>
                    <p>New highlight This is because memberships are ongoing unless cancelled, and consequently...</p>
                  </div>
                </div>
                <div className="newsItemXXX col-md-4">  
                  <div className="newsImgPartXXX">
                    <img src={imgRodin} className="rounded img-fluid"/>
                  </div>
                  <div className="newInfoXXX">
                    <div className="font-weight-lighter">WED, 17 JUN 2020</div>
                    <h3 className="text-info">News title</h3>
                    <p>New highlight This is because memberships are ongoing unless cancelled, and consequently...</p>
                  </div>
                </div>
                <div className="newsItemXXX col-md-4">  
                  <div className="newsImgPartXXX">
                    <img src={imgSushimasa} className="rounded img-fluid"/>
                  </div>
                  <div className="newInfoXXX">
                    <div className="font-weight-lighter">WED, 17 JUN 2020</div>
                    <h3 className="text-info">News title</h3>
                    <p>New highlight This is because memberships are ongoing unless cancelled, and consequently...</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
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