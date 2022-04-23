import React from 'react';
import './sign.css';

function Signup(props) {
    return (
        <div>
  <div className="container-fluid">
    <div className="row no-gutter">
        
        <div className="col-md-6 d-none d-md-flex bg-image"></div>


       
        <div className="col-md-6 bg-custom">
            <div className="login d-flex align-items-center py-5">

               
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 mx-auto">
                            <h4 className="display-5" style={{textAlign:'center'}}>Welcome to Melophile</h4>
                            <form>
                                <div className="form-group mb-3" style={{marginTop:'32px'}}>
                                    <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4"/>
                                </div>
                                <div className="form-group mb-3">
                                    <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input id="customCheck1" type="checkbox" checked className="custom-control-input"/>
                                    <label for="customCheck1" className="custom-control-label">Remember password</label>
                                </div>
                                <button type="submit" className="btn  btn-block text-uppercase mb-2 rounded-pill shadow-sm" style={{backgroundColor:'#EA215C'}}>Sign in</button>
                               
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>


        </div>
    );
}

export default Signup;


