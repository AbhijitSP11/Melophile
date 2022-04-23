import React from 'react';

import { Link } from 'react-router-dom';
import './Payment.css';

//Subscription Page 

class Payment extends React.Component {
  render() {
    return (
      <div>
        <section className="pricing py-5">
  <div className="container">
    <div className="row">
     
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-uppercase text-center" style={{color:"black"}}>Free</h5>
            <h6 className="card-price text-center" style={{color:"#EA215C"}}>500<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i class="bi bi-check"></i></span><h6 style={{color:'#18191D'}}>Single User</h6></li>
              <li><span className="fa-li"><i class="bi bi-check"></i></span><h6 style={{color:'#18191D'}}>5GB Storage</h6></li>
              <li><span className="fa-li"><i class="bi bi-check"></i></span><h6 style={{color:'#18191D'}}>Music Downloads</h6></li>
              <li><span className="fa-li"><i class="bi bi-check"></i></span><h6 style={{color:'#18191D'}}>Community Access</h6></li>
              <li className="text-muted"><span className="fa-li"><i class="bi bi-x"></i></span>Unlimited Music Sharing</li>
              <li className="text-muted"><span className="fa-li"><i class="bi bi-x"></i></span>Dedicated Phone Support</li>
              <li className="text-muted"><span className="fa-li"><i class="bi bi-x"></i></span>Free Subdomain</li>
              <li className="text-muted"><span className="fa-li"><i class="bi bi-x"></i></span>Monthly Status Reports</li>
            </ul>
            <Link to= {{pathname:"/payment-form", plan:"Free Plan", user:"single user", price:"500", storage:"5GB Storage"}} className="btn btn-block btn-custom text-uppercase">Buy Now</Link>
          </div>
        </div>
      </div>
     
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title  text-uppercase text-center"style={{color:"black"}}>Plus</h5>
            <h6 className="card-price text-center"style={{color:"#EA215C"}}>800<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i class="bi bi-check"></i></span><strong style={{color:'black'}}>5 Users</strong></li>
              <li ><span className="fa-li"><i class="bi bi-check"></i></span><h6 style={{color:'#18191D'}}>50GB Storage</h6></li>
              <li><span className="fa-li"><i class="bi bi-check"></i></span><h6 style={{color:'#18191D'}}>Unlimited Music Downloads</h6></li>
              <li><span className="fa-li"><i class="bi bi-check"></i></span><h6 style={{color:'#18191D'}}>Community Access</h6></li>
              <li><span className="fa-li"><i class="bi bi-check"></i></span><h6 style={{color:'#18191D'}}>Unlimited Music Sharing</h6></li>
              <li><span className="fa-li"><i class="bi bi-check"></i></span><h6 style={{color:'#18191D'}}>Dedicated Phone Support</h6></li>
              <li><span className="fa-li"><i class="bi bi-check"></i></span><h6 style={{color:'#18191D'}}>Free Subdomain</h6></li>
              <li className="text-muted"><span className="fa-li"><i class="bi bi-x"></i></span>Monthly Status Reports</li>
            </ul>
            <Link to= {{pathname:"/payment-form", plan:"Plus Plan", user:"5 users" , price:"800"}} className="btn btn-block btn-custom text-uppercase">Buy Now</Link>
          </div>
        </div>
      </div>
      
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title  text-uppercase text-center"style={{color:"black"}}>Pro</h5>
            <h6 className="card-price text-center"style={{color:"#EA215C"}}>1200<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i class="bi bi-check"></i></span><strong style={{color:'#18191D'}}>Unlimited Users</strong></li>
              <li><span className="fa-li"><i class="bi bi-check"></i></span><h6 style={{color:'#18191D'}}>150GB Storage</h6></li>
              <li><span className="fa-li"><i class="bi bi-check"></i></span><h6 style={{color:'#18191D'}}>Unlimited Music Downloads</h6></li>
              <li><span className="fa-li"><i class="bi bi-check"></i></span><h6 style={{color:'#18191D'}}>Community Access</h6></li>
              <li><span className="fa-li"><i class="bi bi-check"></i></span><h6 style={{color:'#18191D'}}>Unlimited Music Sharing</h6></li>
              <li><span className="fa-li"><i class="bi bi-check"></i></span><h6 style={{color:'#18191D'}}>Dedicated Phone Support</h6></li>
              <li><span className="fa-li"><i class="bi bi-check"></i></span><strong style={{color:'#18191D'}}>Unlimited</strong>Free Subdomains</li>
              <li><span className="fa-li"><i class="bi bi-check"></i></span><h6 style={{color:'#18191D'}}>Monthly Status Reports</h6></li>
            </ul>
            <Link to= {{pathname:"/payment-form", plan:"Pro Plan", user:"Unlimited users" , price:"1200"}} className="btn btn-block btn-custom text-uppercase">Buy Now</Link>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  
</section>
      </div>
    );
  }
}

export default Payment;
