import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { connect} from "react-redux";
import * as authDuck from "./../../../store/ducks/auth.duck";
import './overview.scss';   
import { Tab, Tabs, Nav, Col, Row } from "react-bootstrap";
import reviewImg from './../../../assets/feed.png';
import certificationImg from './../../../assets/certificationlogo.png';
import PayPal from './paypal';
function PaymentSetting(props){
    const [status, setStatus] = useState('');
    const [showButton, setShowButton]= useState(false);
    const [checkout, setCheckout] = useState(false);
    const [env, setEnv] = useState('sandbox'); // Or 'sandbox'
    const [client,setClient] =useState({
      sandbox:    'sb-x5i8i3401709@business.example.com', // sandbox client ID
      production: 'AQBiaOrEptmasDYD2RjmKvJO1vHO_RRsC20Ov0JOwkOuW9TPzyYIXyPSiLPaujsXUqFA-SKEyq37ng6e' // production client ID
    });

    const [commit,setCommit] = useState(true); // Show a 'Pay Now' button
    return(
        <div className="kt-grid__item kt-grid__item--fluid kt-app__content">
            <div className="card">
                <div className="card-body p-5">
                <Tab.Container id="left-tabs-example" defaultActiveKey="paypal">
                  <Nav variant="pills" className="flex-row">
                        {/* <Nav.Item>
                        <Nav.Link eventKey="card"><i className="fa fa-credit-card"></i> Credit Card</Nav.Link>
                        </Nav.Item> */}
                        <Nav.Item>
                        <Nav.Link eventKey="paypal"><i className="fab fa-paypal"></i>  Paypal</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="card">
                        <p className="alert alert-success">Some text success or error</p>
                        <form role="form">
                        <div className="form-group">
                            <label for="username">Full name (on the card)</label>
                            <input type="text" className="form-control" name="username" placeholder="" required=""/>
                        </div> 
                    
                        <div className="form-group">
                            <label for="cardNumber">Card number</label>
                            <div className="input-group">
                                <input type="text" className="form-control" name="cardNumber" placeholder=""/>
                                <div className="input-group-append">
                                    <span className="input-group-text text-muted">
                                        <i className="fab fa-cc-visa"></i>   <i className="fab fa-cc-amex"></i>   
                                        <i className="fab fa-cc-mastercard"></i> 
                                    </span>
                                </div>
                            </div>
                        </div> 
                    
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <label><span className="hidden-xs">Expiration</span> </label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" placeholder="MM" name=""/>
                                        <input type="number" className="form-control" placeholder="YY" name=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label data-toggle="tooltip" title="" data-original-title="3 digits code on back side of the card">CVV <i className="fa fa-question-circle"></i></label>
                                    <input type="number" className="form-control" required=""/>
                                </div> 
                            </div>
                        </div> 
                        <button className="subscribe btn btn-primary btn-block" type="button"> Confirm  </button>
                        </form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="paypal">
                                
                                {(checkout === true) 
                                    ? <div className="payment-div">
                                        <PayPal 
                                        />
                                    </div> 

                                    :<div>
                                        <p>Paypal is easiest way to pay online</p>
                                        <p>
                                        <button type="button" className="btn btn-primary"onClick={() => {setCheckout(true)}}> <i className="fab fa-paypal"></i> Log in my Paypal </button>
                                        </p>
                                        <p><strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                    }
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                {/* <ul className="nav bg-light nav-pills rounded nav-fill mb-3" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="#nav-tab-card">
                        <i className="fa fa-credit-card"></i> Credit Card</a></li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#nav-tab-paypal">
                        <i className="fab fa-paypal"></i>  Paypal</a></li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#nav-tab-bank">
                        <i className="fa fa-university"></i>  Bank Transfer</a></li>
                </ul> */}
                
                {/* <div className="tab-content">
                    
                    
                    <div className="tab-pane fade" id="nav-tab-bank">
                <p>Bank accaunt details</p>
                <dl className="param">
                <dt>BANK: </dt>
                <dd> THE WORLD BANK</dd>
                </dl>
                <dl className="param">
                <dt>Accaunt number: </dt>
                <dd> 12345678912345</dd>
                </dl>
                <dl className="param">
                <dt>IBAN: </dt>
                <dd> 123456789</dd>
                </dl>
                <p><strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. </p>
                </div> 
                </div> */}
                
                </div> 
                </div> 
        </div>
        );
}
const mapStateToProps = (state) => ({
    user: state.auth.user,
     role:state.auth.role
  })
export default connect(
    mapStateToProps,
    {...authDuck.actions}
)(PaymentSetting);