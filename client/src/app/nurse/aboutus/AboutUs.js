import React from "react";
import Header from "../layout/Header";
import BradCrumb from '../layout/BreadCrumb';
import Footer from "../layout/Footer";
import './AboutUs.scss';
export default function AboutUs(){
    return (
      <>
        <Header/>
        <BradCrumb title="About Us" base="Home"/>
        <section  className="aboutusPage">
          <div className="container">
            <div className="row">
                <div className="col-md-6 leftAbout">
                    <div className="centerAbout">
                        <h2 className="elementor-heading-title elementor-size-default">
                            “We are a team of Experts in this field “
                        </h2>	
                        <h2 className="elementor-heading-title elementor-size-default-second">
                            Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Viverra aliquet eget sit amet tellus cras adipiscing enim.
                        </h2>
                        <h2 className="elementor-heading-title elementor-size-default-second" style={{margin:'0px 0px 42px 0px'}}>
                            Turpis massa sed elementum tempus egestas sed sed risus pretium. Bibendum neque egestas congue quisque egestas diam. Sit amet
                        commodo nulla facilisi.
                        </h2>
                        <div className="elementor-button-wrapper">
                            <a href="#" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                                <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">see our work</span>
                                </span>
                            </a>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-6 rightAbout">
                    <img width="578" height="640" src="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/about-layer-2.png" className="attachment-large size-large" alt="" srcset="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/about-layer-2.png 578w, https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/about-layer-2-271x300.png 271w, https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/about-layer-2-180x199.png 180w"/>
                </div>
            </div>
          </div>
        </section>
        <section className="aboutPageSecond">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <div className="item">
                            <div className="item-inner">
                                <div className="features-box-image img">
                                    <img width="150" height="150" src="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/Service1.png" className="attachment-full size-full" alt=""/>
                                </div>
                                <div className="features-box-content">
                                    <h3 className="title">flexible staffing</h3>
                                    <div className="description"> Nascetur ridiculus mus mauris vitae ultricies.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <div className="item">
                            <div className="item-inner">
                                <div className="features-box-image img">
                                    <img width="150" height="150" src="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/Service2.png" className="attachment-full size-full" alt=""/>
                                </div>
                                <div className="features-box-content">
                                    <h3 className="title">Full Time Hiring</h3>
                                    <div className="description"> Nascetur ridiculus mus mauris vitae ultricies.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <div className="item">
                            <div className="item-inner">
                                <div className="features-box-image img">
                                    <img width="150" height="150" src="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/Service3.png" className="attachment-full size-full" alt=""/>
                                </div>
                                <div className="features-box-content">
                                    <h3 className="title">Robert Half Direct</h3>
                                    <div className="description"> Nascetur ridiculus mus mauris vitae ultricies.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <div className="item">
                            <div className="item-inner">
                                <div className="features-box-image img">
                                    <img width="150" height="150" src="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/Service4.png" className="attachment-full size-full" alt=""/>
                                    </div>
                                <div className="features-box-content">
                                    <h3 className="title">Managed Solutions</h3>
                                    <div className="description"> Nascetur ridiculus mus mauris vitae ultricies.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <div className="item">
                            <div className="item-inner">
                               <div className="features-box-image img">
                                   <img width="150" height="150" src="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/Service5.png" className="attachment-full size-full" alt=""/>
                                </div>
                                <div className="features-box-content">
                                    <h3 className="title">Executive Search</h3>
                                    <div className="description"> Nascetur ridiculus mus mauris vitae ultricies.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <div className="item">
                            <div className="item-inner">
                                <div className="features-box-image img">
                                    <img width="150" height="150" src="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/Service6.png" className="attachment-full size-full" alt=""/>
                                </div>
                                <div className="features-box-content">
                                    <h3 className="title">Compare Salaries</h3>
                                    <div className="description"> Nascetur ridiculus mus mauris vitae ultricies.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="aboutPageThird">
            <div className="container">
                <div style={{width:'100%',padding: '78px 15px 65px 15px',textAlign:'center'}}>
                    <h2 className="elementor-heading-title elementor-size-default">Companion person</h2>
                    <h2 className="apus-heading-title workio-heading-title workio-size-default m-25">Our Magic  <span className="text-theme">Team</span></h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="widget widget-team  center">
                                <div className="team-item">
                                    <div className="top-image">
                                        <div className="team-image">
                                            <div className="image-wrapper image-loaded">
                                                <img width="650" height="650" src="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/team-01.jpg" className="attachment-full size-full unveil-image" alt=""  sizes="(max-width: 650px) 100vw, 650px"/>
                                            </div>       
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <h3 className="name-team">Nickolas Hill</h3>
                                    <div className="job">Founder &amp; CEO</div>
                                    <div className="team-description">Exercitation ullamco laboris nisi ut aliquip exa aute.</div>
                                    <ul className="social">
                                        <li>
                                            <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <i className="fab fa-twitter"></i>
                                              </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="widget widget-team  center">
                                <div className="team-item">
                                    <div className="top-image">
                                        <div className="team-image">
                                            <div className="image-wrapper image-loaded">
                                                <img width="650" height="650" src="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/team-02.jpg" className="attachment-full size-full unveil-image" alt="" /></div>                        </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h3 className="name-team">Anna Clifford</h3>
                                            <div className="job">Nurse</div>
                                            <div className="team-description">Exercitation ullamco laboris nisi ut aliquip exa aute.</div>
                
                                            <ul className="social">
                                        <li>
                                            <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <i className="fab fa-twitter"></i>
                                              </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="widget widget-team  center">
                                <div className="team-item">
                                    <div className="top-image">
                                        <div className="team-image">
                                            <div className="image-wrapper image-loaded">
                                                <img width="650" height="650" src="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/team-03.jpg" className="attachment-full size-full unveil-image" alt=""/></div>                        </div>
                                            </div>
                                        </div>
                                    <div className="content">
                                        <h3 className="name-team">Felix Hoffman</h3>
                                        <div className="job">Physician</div>
                                        <div className="team-description">Exercitation ullamco laboris nisi ut aliquip exa aute.</div>
                                        <ul className="social">
                                            <li>
                                                <a href="#">
                                                <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="widget widget-team  center">
                                <div className="team-item">
                                    <div className="top-image">
                                        <div className="team-image">
                                            <div className="image-wrapper image-loaded">
                                                <img width="650" height="650" src="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/team-04.jpg" className="attachment-full size-full unveil-image" alt="" /></div>                        </div>
                                            </div>
                                        </div>
                                    <div className="content">
                                        <h3 className="name-team">Erika Johnston</h3>
                                        <div className="job">Designer</div>
                                        <div className="team-description">Exercitation ullamco laboris nisi ut aliquip exa aute.</div>
                                        <ul className="social">
                                        <li>
                                            <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <i className="fab fa-twitter"></i>
                                              </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="widget widget-team  center">
                                <div className="team-item">
                                    <div className="top-image">
                                        <div className="team-image">
                                            <div className="image-wrapper image-loaded">
                                                <img width="650" height="650" src="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/team-09.jpg" className="attachment-full size-full unveil-image" alt="" /></div>                        </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h3 className="name-team">Billy Satter</h3>
                                                <div className="job">Developer</div>
                                                <div className="team-description">Exercitation ullamco laboris nisi ut aliquip exa aute.</div>
                                                <ul className="social">
                                                    <li>
                                                        <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="widget widget-team  center">
                                <div className="team-item">
                                    <div className="top-image">
                                        <div className="team-image">
                                            <div className="image-wrapper image-loaded">
                                                <img width="650" height="650" src="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/team-08.jpg" className="attachment-full size-full unveil-image" alt=""/></div>                        </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h3 className="name-team">Kimberly</h3>
                                                <div className="job">PR Manager</div>
                                                <div className="team-description">Exercitation ullamco laboris nisi ut aliquip exa aute.</div>
                                                <ul className="social">
                                                    <li>
                                                        <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fab fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="aboutPageFirth">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="elementor-heading-title elementor-size-default">Want to become a success Employers?</h3>
                        <div className="elementor-heading-subtitle elementor-size-default">Gather data from within your own organization</div>
                    </div>
                    <div className="col-md-4" style={{textAlign:'right'}}>
                        <a href="#" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                            <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">signup today</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
      </>
    );
}

