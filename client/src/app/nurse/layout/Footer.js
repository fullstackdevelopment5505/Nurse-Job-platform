import React from "react";
import './Footer.scss';
import logo from '../../assets/logo1.png';
class Footer extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <div  className="footerPart"style={{backgroundColor:"white"}}>
        <section className="container">
          <div className="row">
          <nav className="navbar navbar-inverse" style={{width:'100%',height:'auto'}}>
              <div className="container-fluid">
                <div className="navbar-header">
                  <div className="logo ">
                      <a href="#">
                          <span className="logo-main">
                              <img width="431" height="133" src={logo}alt=""/>                
                          </span>
                      </a>
                  </div>
                </div>
                <ul className="nav navbar-right">
                  <li><a href="/home">How it works</a></li>
                  <li><a href="/aboutus">Privacy Policy</a></li>
                  <li><a href="/aboutus">About</a></li>
                  <li><a href="/contactus">Contact</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <section className="footer_second">
          <div className="container ">
              <div className="row">
                  <div className="col-md-4">
                    <h3 className="elementor-heading-title elementor-size-default">About Nurse</h3>
                    <div className="elementor-text-editor elementor-clearfix">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="item">
                            <div className="item-inner">
                              <div className="features-box-content">
                                  <h3 className="title">Address:</h3>
                                  <div className="description">555 Wall Street, USA, NY</div></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <div className="item">
                                <div className="item-inner">
                                  <div className="features-box-content">
                                    <h3 className="title">Email:</h3>
                                    <div className="description">example@apus.com</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <div className="item">
                                <div className="item-inner">
                                  <div className="features-box-content">
                                    <h3 className="title">Call:</h3>
                                    <div className="description">555-555-1234</div>
                                  </div>
                                  </div>
                                </div>
                              </div>
                        </div>
                        <div className="elementor-widget-container">
			                     <div className="widget-socials">
                              <div className="socials  square">
                                <ul className="social list-inline">
                                    <li>
                                        <a href="https://facebook.com">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                      <a href="https://twitter.com/">
                                      <i className="fab fa-twitter"></i>
                                      </a>
                                     </li>
                                    <li>
                                        <a href="https://www.instagram.com">
                                      <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.pinterest.com/">
                                      <i className="fab fa-pinterest"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                      <i className="fab fa-google-plus"></i>
                                        </a>
                                    </li>
                                 </ul>
                             </div>
                        </div> 
                     </div>
                  </div>
                  <div className="col-md-4">
                    <h3 className="elementor-heading-title elementor-size-default">Conact </h3>
                    <div className="elementor-text-editor elementor-clearfix">How it works</div>
                    <div className="elementor-text-editor elementor-clearfix">About Us</div>
                    <div className="elementor-text-editor elementor-clearfix">Contact Us</div>
                    {/* <div className="elementor-text-editor elementor-clearfix">Jobs Featured</div> */}
                    {/* <div className="elementor-text-editor elementor-clearfix">Jobs Urgent</div> */}
                    {/* <div className="elementor-text-editor elementor-clearfix">Candidate List</div> */}
                    {/* <div className="elementor-text-editor elementor-clearfix">Candidates Grid</div> */}
                    
                  </div>
                  {/* <div className="col-md-2">
                    <h3 className="elementor-heading-title elementor-size-default">For Employers</h3>
                    <div className="elementor-text-editor elementor-clearfix">Post New</div>
                    <div className="elementor-text-editor elementor-clearfix">Employer List</div>
                    <div className="elementor-text-editor elementor-clearfix">Employers Grid</div>
                    <div className="elementor-text-editor elementor-clearfix">Job Packages</div>
                    <div className="elementor-text-editor elementor-clearfix">Jobs Listing</div>
                    <div className="elementor-text-editor elementor-clearfix">Jobs Listing</div>
                  </div> */}
                  <div className="col-md-4">
                    <h3 className="elementor-heading-title elementor-size-default">Join Our Newsletter</h3>
                    <div className="elementor-text-editor elementor-clearfix">Subscribe to get the latest jobs posted, candidates...</div>
                    <form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-160" method="post" data-id="160" data-name="Newsletter 1">
                        <div className="mc4wp-form-fields">
                          <p>	
                            <label>
                              <input type="email" name="EMAIL" placeholder="Your email address" required=""/>
                            </label>
                          </p>
                          <p>  	
                              <button type="submit" value="Sign up"><i className="fa fa-paper-plane-o"></i>Sign up</button>   	
                          </p>
                        </div>
                    </form>
                  </div>
              </div>
          </div>
        </section>
        <section className="footer_third">
          <div className="elementor-text-editor elementor-clearfix">Copyright Nurse © 2020. All Rights Reserved</div>
        </section>
      </div>
    );
  }
}


export default Footer;
// 