import React from 'react';

const Footer=()=>{
    return(

        <div className="container footerpart">
          <div className="row">
            <div className="col">
              <h3>FOREAT &copy;</h3>
              <p>
              FOREAT is a food and drink store comes to serve you with the best taste you can get!  
               
              </p>
            </div>
            <div className="col">
                <h3>Explore</h3>
                <ul className="exp-link">
                    <li><a href="/">Home</a></li>
                    <li><a href="/member">Membership</a></li>
                    <li><a href="https://fishop.co.id/" target="_blank">Fishop</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
            <div className="col">
                <h3>Connect With Us !</h3>
                <i className="fas fa-phone-volume"></i> 021-2926-3576 or 0811-919-6688<br/>
                <i className="fab fa-whatsapp"></i> 0815-1913-1635<br/>
                <i className="fab fa-facebook"></i> ForEat<br/>
                <i className="fab fa-instagram"> foreat_id</i>
            </div>
          </div>   
        </div>
  

    )
}

export default Footer;