import React from "react";
import { useSelector } from "react-redux";
import Header from "../nurse/layout/Header";
import Footer from "../nurse/layout/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Form, InputGroup, Col, Row } from "react-bootstrap";

import Slider from "react-slick";
import './HowItWorks.scss'

import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import * as actions from './../actions';
import * as categoryDuck from './../store/ducks/category.duck';
import * as userDuck from './../store/ducks/user.duck';
import * as jobDuck from './../store/ducks/job.duck';
import img5 from './../assets/5.jpg';
import img6 from './../assets/b7.jpg';
import {
    Link,
  } from "react-router-dom";
const useStyles = makeStyles({
    card: {
    //   maxWidth: 345,
      textAlign:'center',
      padding:'20px 10px'
    },
    media: {
      height: 140,
    },
    viewProfileBtn:{
        '&:hover': {
            textShadow:'3 3 3px'
          },
          textAlign:'center',
          margin:'auto'
    }
  });
function HowItWorks(props) {
    actions.getAllCategory()
  .then(res => {
    let {data} = res;
    if(!data.success) {
      props.allCategories([]);
    } else {
      props.allCategories(data.allcategories);
    }
  })
  .catch((err) => {
  });
  actions.getAllNurse()
  .then(res => {
    let {data} = res;
    if(!data.success) {
      props.allNurses([]);
    } else {
      props.allNurses(data.nurses);
    }
  })
  .catch((err) => {
  });
  actions.getAllClient()
  .then(res => {
    let {data} = res;
    if(!data.success) {
      props.allClients([]);
    } else {
      props.allClients(data.clients);
    }
  })
  .catch((err) => {
  });
  actions.getAllJob()
  .then(res => {
    let {data} = res;
    if(!data.success) {
      props.allJobs([]);
    } else {
      props.allJobs(data.jobs);
    }
  })
  .catch((err) => {
  });
    const classes = useStyles();
  return (
    <>
     <Header/>
     <section className="apus-breadscrumb apus-breadscrumb-how">
            <div className="container">
                <div className="col-md-10 mx-auto" style={{paddingTop:'8%',paddingBottom:'8%'}}>
                    {/* <div className="left-inner">
                        <ol className="breadcrumb">
                            <li><a href="#">asdasdasd</a>  </li> 
                            <li><i className="fas fa-angle-right"></i></li>
                            <li><span className="active">How Nurse Works</span></li>
                        </ol>
                    </div> */}
                    {/* <div className="breadscrumb-inner clearfix"> */}
                        <h2 className="bread-title-how" style={{textAlign:'center'}}>How Nurse Works</h2>
                        <h4 className="bread-title-how1"style={{textAlign:'center'}}>Find, assign, manage, and pay technicians from one place.</h4>
                    {/* </div> */}
                </div>
            </div>
        </section>
      <section className="row third">
             <p className="p_working_process"style={{textAlign:'center',width:'100%'}}>WORKING PROCESS</p><h1 className="how_it_works"style={{textAlign:'center',width:'100%'}}>Working<span style={{color:'#11b719'}}>Steps</span></h1>
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="subwprocess">
                        <div className="features-box-image icon">
                        <i aria-hidden="true" className="fas fa-user-shield"></i>	
                        </div>
                        <div className="features-box-content">
                            <h3 className="title">create an account</h3>
                            <div className="description">Gravida quis blandit turpis cursus in hac habitasse platea. Ut diam quam nulla porttitor.</div>
                        </div> 
                    </div>
                    
                </div>
                <div className="col-md-4  mx-auto">
                    <div className="subwprocess">
                        <div className="features-box-image icon">
                        <i aria-hidden="true" className="fas fa-users"></i>	
                        </div>
                        <div className="features-box-content">
                            <h3 className="title">search jobs</h3>
                            <div className="description">Varius duis at consectetur lorem donec massa. Consectetur adipiscing elit ut aliquam.</div>
                            </div>
                        </div>
                </div>
                <div className="col-md-4 mx-auto">
                <div className="subwprocess">
                    <div className="features-box-image icon">
                    <i aria-hidden="true" className="fas fa-piggy-bank"></i>	
                    </div>
                    <div className="features-box-content">
                        <h3 className="title">save & Apply</h3>
                        <div className="description">Massa ultricies mi quis hendrerit dolor magna eget est. Accumsan in nisl nisi scelerisque</div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
      <section className="row firth">
          <div className="col-md-12 right_firth1">
             <h5 className="elementor-heading-title elementor-size-default">Find Jobs in Nurse</h5>
            <div className="elementor-heading-title elementor-size-default">Semper ut eget, et ultrices nulla hendrerit tortor wisi mus, quis in faucibus fermentum semper laoreet.</div>
            <div className="elementor-widget-container" style={{marginTop:'17px'}}>
					<div className="elementor-button-wrapper" style={{textAlign:'center'}}>
			            <Link to="jobs" className="elementor-button-link elementor-button elementor-size-sm ele-new-button" role="button">
                            <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-icon elementor-align-icon-left">
                            <i aria-hidden="true" className="far fa-thumbs-up"></i>			</span>
                            <span className="elementor-button-text">Get Started</span>
                            </span>
                        </Link>
                    </div>
				</div>
          </div>
          
      </section>
      
      <section className="sixth container">
			<div className="row">
                <div className="col-md-6" style={{paddingTop:'3%'}}>
                    <div className="c-duo__heading">
                        <h2 className="o-hdg o-hdg--h2">Live Chat with Nurse anytime</h2>
                    </div>
                    <div className="clearfix">
                        <div className="o-blocks__item">
                            <div className="c-duo__body">
                                <div className="clearfix">
                                    <p>Say goodbye to keeping track of payments and tax paperwork for independent contractors.</p>
                                    <p>Once you’ve pre-funded your account, we handle the rest.</p>
                                    <p>Rely on Field Nation to pay technicians twice weekly and issue 1099 tax paperwork on your behalf at the end of the year.</p>
                                </div>
                            <div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                <div className="col-md-6">
                    <img src={img5} alt="img5"style={{maxWidth:'100%'}}></img>
                </div>
            </div>
            <div className="row" style={{paddingTop:'25px'}}>
                    <div className="col-md-6">
                    <img src={img6} alt="img6" style={{maxWidth:'100%'}}></img>
                </div>
                 <div className="col-md-6" style={{paddingTop:'3%'}}>
                    <div className="c-duo__heading">
                        <h2 className="o-hdg o-hdg--h2">Live Chat with Nurse anytime</h2>
                    </div>
                    <div className="clearfix">
                        <div className="o-blocks__item">
                            <div className="c-duo__body">
                                <div className="clearfix">
                                    <p>Say goodbye to keeping track of payments and tax paperwork for independent contractors.</p>
                                    <p>Once you’ve pre-funded your account, we handle the rest.</p>
                                    <p>Rely on Field Nation to pay technicians twice weekly and issue 1099 tax paperwork on your behalf at the end of the year.</p>
                                </div>
                            <div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                
            </div>
      </section>
      <section className="row firth">
          <div className="col-md-12 left_firth1">
             <h5 className="elementor-heading-title elementor-size-default">Start Work Now</h5>
            <div className="elementor-heading-title elementor-size-default">Semper ut eget, et ultrices nulla hendrerit tortor wisi mus, quis in faucibus fermentum semper laoreet.</div>
            <div className="elementor-widget-container" style={{marginTop:'17px'}}>
					<div className="elementor-button-wrapper" style={{textAlign:'center'}}>
			            <Link to="login" className="elementor-button-link elementor-button elementor-size-sm ele-new-button" role="button">
                            <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-icon elementor-align-icon-left">
                            <i aria-hidden="true" className="far fa-thumbs-up"></i>			</span>
                            <span className="elementor-button-text">Get Started</span>
                            </span>
                        </Link>
                    </div>
				</div>
          </div>
          
      </section>
      <Footer/>

    </>
  );
}
export default connect(
    null,
    {...categoryDuck.actions, ...userDuck.actions, ...jobDuck.actions}
  )(HowItWorks)
  