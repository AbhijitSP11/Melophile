import {Component, useState} from 'react';
import './Chk.css';
import ScriptTag from 'react-script-tag';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { render } from 'react-dom';
import {Modal, Button} from 'react-bootstrap';
// import Discount from './Discount';
import DiscountCalculator from './DiscountCalculator';

import {Navbar, Nav, NavDropdown, FormControl, Form, Container} from 'react-bootstrap';

function Checkout(props) {

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var Buy = useLocation();
    console.log(Buy);
    
 
  
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)

    // function calculate() {
    //     var price= 40;
    //     var discount= 0;
    //     var afterDiscount= 0;
    //  /*    price = Number(document.discountCalculator.price.value);*/
    //     numberOfMembers = Number(document.discountCalculator.value);
    //     var discount = Number(document.discountCalculator.discount.value);
     
     
    //   var afterDiscount=price - ( price*discount/100 );
     
     
    //  /*   document.discountCalculator.price.value=price.toFixed(2);*/
    //     document.discountCalculator.discount.value=discount.toFixed(2);
    //     document.discountCalculator.afterDiscount.value=afterDiscount.toFixed(2);
     
    //  }

    return ( 
        <div >
           
           <Navbar style={{backgroundColor: "#111217"}} expand="lg" variant = "dark" fixed = "top">
          
          <Navbar.Brand Link to="#home" style={{color:'#EA215C'}}>Melophile</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
                   
           
        
          </Navbar.Collapse>
          
        </Navbar>
            <div class="container">
    <div class="py-5 text-center">
        {/* <img class="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/> */}
        <h2 style={{color:"#EA125C"}}>Melophile Checkout Form</h2>
        {/* <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p> */}
    </div>
    <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Subscription</span>
                <span class="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul class="list-group mb-3 ">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0" style={{color:'black'}}>Plan </h6>
                        <h6 class="text-muted">{Buy.plan}</h6>
                    </div>
                    <span class="text-muted"></span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0"style={{color:'black'}}>Users</h6>
                        <h6 class="text-muted">{Buy.user}</h6>
                    </div>
                    {/* <span class="text-muted">{Buy.price}</span> */}
                </li>
                {/* <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">Third item</h6>
                        <small class="text-muted">Brief description</small>
                    </div>
                    <span class="text-muted">$5</span>
                </li> */}
                <li class="list-group-item d-flex justify-content-between bg-light">
                    <div class="text-success">
                        <h5 class="my-0" style={{color:"#EA1257"}}>Price</h5>
                        {/* <small>EXAMPLECODE</small> */}
                    </div>
                    <span style={{color:"#EA1257"}}><h5>Rs.{Buy.price}</h5></span>
                </li>
                {/* <li class="list-group-item d-flex justify-content-between">
                    <h6 style={{color:'green'}}><span>Total (Rs)</span></h6>
                    <strong>$20</strong>
                </li> */}
            </ul>
            <DiscountCalculator/>
            {/* <form class="card p-2">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Discount"/>
                    <div class="input-group-append">
                        <button value="submit"  class="btn btn-secondary">Redeem</button>
                    </div>
                   
                </div>
            </form> */}
           
            
        </div>
        <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Billing Dashboard</h4>
            <form class="needs-validation" novalidate="">
                <div class="row">
                    <div class="col-md-6 mb-3">
                    <label for="firstname">First name</label>
                    <input type="text" class="form-control" id="firstname" placeholder="Alex"  required=""/>
                        <div class="invalid-feedback"> Valid first name is required. </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input type="text" class="form-control" id="lastName" placeholder=""  required=""/>
                        <div class="invalid-feedback"> Valid last name is required. </div>
                    </div>
                </div>
                {/* <div class="mb-3">
                    <label for="username">Username</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">@</span>
                        </div>
                        <input type="text" class="form-control" id="username" placeholder="Username" required=""/>
                        <div class="invalid-feedback" style={{width: "100%"}}> Your username is required. </div>
                    </div>
                </div> */}
                <div class="mb-3">
                    <label for="email">Email <span class="text-muted">(Optional)</span></label>
                    <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
                    <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                </div>
                <div class="mb-3">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="1234 Main St" required=""/>
                    <div class="invalid-feedback"> Please enter your shipping address. </div>
                </div>
                <div class="mb-3">
                    <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                    <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"/>
                </div>
                <div class="row">
                    <div class="col-md-5 mb-3">
                        <label for="country">Country</label>
                        <select class="custom-select d-block w-100" id="country" required="">
                            <option value="">Choose...</option>
                            <option>United States</option>
                        </select>
                        <div class="invalid-feedback"> Please select a valid country. </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="state">State</label>
                        <select class="custom-select d-block w-100" id="state" required="">
                            <option value="">Choose...</option>
                            <option>California</option>
                        </select>
                        <div class="invalid-feedback"> Please provide a valid state. </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="zip">Zip</label>
                        <input type="text" class="form-control" id="zip" placeholder="" required=""/>
                        <div class="invalid-feedback"> Zip code required. </div>
                    </div>
                </div>
                <hr class="mb-4"/>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="same-address"/>
                    <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="save-info"/>
                    <label class="custom-control-label" for="save-info">Save this information for next time</label>
                </div>
                <hr class="mb-4"/>
                <h4 class="mb-3">Payment</h4>
                <div class="d-block my-3">
                    <div class="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required=""/>
                        <label class="custom-control-label" for="credit">Credit card</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required=""/>
                        <label class="custom-control-label" for="debit">Debit card</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required=""/>
                        <label class="custom-control-label" for="paypal">PayPal</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="cc-name">Name on card</label>
                        <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
                        <small class="text-muted">Full name as displayed on card</small>
                        <div class="invalid-feedback"> Name on card is required </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="cc-number">Credit card number</label>
                        <input type="text" class="form-control" id="cc-number" placeholder="6703 4444 4444 4449" required=""/>
                        <div class="invalid-feedback"> Credit card number is required </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <label for="cc-expiration">Expiration</label>
                        <input type="text" class="form-control" id="cc-expiration" placeholder="03/2030" required=""/>
                        <div class="invalid-feedback"> Expiration date required </div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="cc-cvv">CVV</label>
                        <input type="text" class="form-control" id="cc-cvv" placeholder="773" required=""/>
                        <div class="invalid-feedback"> Security code required </div>
                    </div>
                </div>
                <hr class="mb-4"/>
                
               
                {/* <Button style={{backgroundColor:"#EA215C", border:'none'}} onClick={handleShow}>
        Proceed
      </Button> */}

      <Modal show={show} onHide={handleClose} animation={true} >
        <Modal.Header closeButton >
          <Modal.Title style={{color:"#EA215C"}}><h2>Congratulations 🎉🎉</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color:'white', backgroundColor:'#111217'}}><h3>Your Transaction is successful</h3> <br/> Enjoy the subscription features on your {Buy.plan}.</Modal.Body>
        <Modal.Footer style={{backgroundColor:'#111217'}}>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Link to="/" ><Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      
            </form>
        </div>
        
    </div>
    <br/>
    {/* <Discount/> */}
   
    <Button class="btn btn-primary btn-lg btn-block"  onClick={handleShow} style={{backgroundColor:"#EA215C", border:"none"}}>Continue to checkout</Button>
    <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">© 2021 Melophile</p>
        {/* <ul class="list-inline">
            <li class="list-inline-item"><a href="#">Privacy</a></li>
            <li class="list-inline-item"><a href="#">Terms</a></li>
            <li class="list-inline-item"><a href="#">Support</a></li>
        </ul> */}
    </footer>
</div>
            {/* <body>
            <form name="discountCalculator" >
            
            <label for="price">Price</label>
                <input type="text" name="price" id="price"/>
                <label for="discount">Discount</label>
                <input type="number" name="discount" id="discount" maxlength="4" min="0" max="100"/>
                <label for="afterdiscount">After Discount</label>
                <input type="number" name="afterDiscount" id="afterdiscount" readonly/>
            </form>
            <input type="button" value="submit" />
            </body> */}

               
        </div>
    );
}

export default Checkout;