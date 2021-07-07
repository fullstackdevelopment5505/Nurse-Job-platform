import React from "react";
import { useSelector } from "react-redux";
import Header from "../nurse/layout/Header";
import Footer from "../nurse/layout/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Form, InputGroup, Col, Row } from "react-bootstrap";

import Slider from "react-slick";
import './NurseDashboard.scss'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { connect } from "react-redux";
import * as actions from './../actions';
import * as categoryDuck from './../store/ducks/category.duck';
import * as userDuck from './../store/ducks/user.duck';
import * as jobDuck from './../store/ducks/job.duck';
import * as bidDuck from './../store/ducks/bid.duck';
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
function NurseDashboard(props) {
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
  actions.getAllBid()
  .then(res => {
    let {data} = res;
    if(!data.success) {
      props.allBids([]);
    } else {
      props.allBids(data.bids);
    }
  })
  .catch((err) => {
  });
    const classes = useStyles();
       const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
      <div key={num} >
        <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                                <a title="Shortlist" href="#" className="btn-action-job btn-add-candidate-shortlist has-text" data-candidate_id="2055" data-nonce="42fa010682" tabIndex="0">
                                    <span className="far fa-heart"></span>
                                    {/* <span className="far fa-heart"></span> */}
                                </a>
                                <div className="row" style={{magin:'0'}}>
                                    <img className="profileImg"width="180" height="180" src="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/can-6.jpg"/>
                                </div>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Candidate
                                </Typography>
                                <div className="info job-metas clearfix">
                                    <div className="candidate-job">
                                        Start Using Wireshark to Hack 
                                    </div>
                                    <div className="rating-avg-star">	  
                                        <div className="review-stars-rated-wrapper">
                                            <div className="review-stars-rated">
                                                <ul className="review-stars">
                                                    <li><span className="fa fa-star"></span></li>
                                                    <li><span className="fa fa-star"></span></li>
                                                    <li><span className="fa fa-star"></span></li>
                                                    <li><span className="fa fa-star"></span></li>
                                                    <li><span className="fa fa-star"></span></li>
                                                </ul>
                                                <ul className="review-stars filled" style={{width: '100%'}}>
                                                    <li><span className="fa fa-star"></span></li>
                                                    <li><span className="fa fa-star"></span></li>
                                                    <li><span className="fa fa-star"></span></li>
                                                    <li><span className="fa fa-star"></span></li>
                                                    <li><span className="fa fa-star"></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button className={classes.viewProfileBtn} style={{color:'#11B719',textAlign:'center'}}>
                            View Profile
                            </Button>
                        </CardActions>
                        </Card>
      </div>
    ));
  return (
    <>
     <Header/>
      <section className="nusedashboard row main">
         <div className="elementor-background-overlay"></div>
         <div className="container">
             <div className="row">
                 <div className="col-md-6">
                        <h4 className="apus-heading-title workio-heading-title workio-size-default">Hire<br/>
                        Top Nurse  <span className="text-theme">Talent?</span></h4>
                        <div className="elementor-heading-title1">Dolor morbi non arcu risus. Felis imperdiet proin fermentum leo vel. Orci dapibus ultrices in iaculis nunc sed. Volutpat maecenas volutpat blandit aliquam.</div>
                        {/* <Form>
                            <Row>
                                <Col>
                                <Form.Control placeholder="Search" />
                                </Col>
                                <Col>
                                    <Button variant="warning"type="submit">Search</Button>
                                </Col>
                            </Row>
                            </Form> */}
                            <div style={{padding:'25px 0'}}>
                                <div className="row">
                                    {/* <div className="col-8">
                                        <input placeholder="Search" style={{height:'62px'}} className="form-control"/>
                                    </div> */}
                                    <div className="col-5" style={{height: '100%'}}>
                                    <Link to="/login"><button className="MuiButtonBase-root MuiButton-root" tabIndex="0" type="submit" style={{color:'#fff',backgroundColor: '#feac36',height: '62px',margin: '0px',borderColor: '#3699f',width: '100%'}}>
                                        <span className="MuiButton-label" style={{color:'#fff',fontSize:'1.5rem',borderColor:'#3699F'}}>Get Started</span>
                                    </button></Link>
                                </div>
                            </div>
                        </div>
                        {/* <form action="https://www.demoapus-wp1.com/workio/candidates-grid/" className="form-search" method="GET">
                            <div className="search-form-inner">
                                 <div className="row">
                                    <div className="list-field col-xs-12 col-md-9 last">
                                         <div className="form-group form-group-title toggle-field ">
                                            <div className="form-group-inner inner">
                                                <i className="ti-search"></i>
	    	                                    <span className="twitter-typeahead">
                                                    <input type="text" name="filter-title" className="form-control apus-autocompleate-candidate-input tt-input" value="" id="1iYjx_title" placeholder="Search For..." autoComplete="off" spellcheck="false" dir="auto" />
                                                    <div className="tt-dataset tt-dataset-search"></div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-3">
                                        <div className="form-group form-group-search">
                                            <button className="btn-submit btn btn-block btn-theme-second" type="submit">
                                                    Search                                </button>
                                        </div>                            
                                    </div>
                                </div>
                            </div>
                        </form> */}
                 </div>
                 <div className="col-md-6"></div>
             </div>
         </div>
      </section>
      <section className="row second">
        <nav className="navbar navbar-expand-sm container">
            <ul className="navbar-nav row">
                <li className="nav-item col-3">
                    <a href="#" tabIndex="0">
                        <img src="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/logo1.png" alt="Image"/>
                    </a>
                </li>
                <li className="nav-item col-3">
                    <a href="#" tabIndex="0">
                        <img src="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/logo2.png" alt="Image"/>
                    </a>
                </li>
                <li className="nav-item col-3">
                    <a href="#" tabIndex="0">
                        <img src="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/logo3.png" alt="Image"/>
                    </a>
                </li>
                <li className="nav-item col-3">
                    <a href="#" tabIndex="0">
                        <img src="https://www.demoapus-wp1.com/workio/wp-content/uploads/2020/02/logo4.png" alt="Image"/>
                    </a>
                </li>
            </ul>
            </nav>
      </section>
      <section className="row third">
             <p className="p_working_process"style={{textAlign:'center',width:'100%'}}>WORKING PROCESS</p><h1 className="how_it_works"style={{textAlign:'center',width:'100%'}}>How It <span style={{color:'#11b719'}}>Works</span></h1>
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
          <div className="col-md-6 left_firth1">
            <h5 className="elementor-heading-title elementor-size-default">Make a Difference with Your Online Resume!</h5>
            <div className="elementor-heading-title elementor-size-default">Optio elit quam suspendisse dui dictumst wisi, elit justo nec ut pellentesque, pellentesque pretium nulla sunt velit</div>
            <div className="elementor-widget-container">
					<div className="elementor-button-wrapper" style={{textAlign:'center'}}>
			            <a href="#" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                            <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-icon elementor-align-icon-left">
                            <i aria-hidden="true" className="far fa-user"></i>			</span>
                            <span className="elementor-button-text">Create Account</span>
                            </span>
                        </a>
                    </div>
				</div>
          </div>
          <div className="col-md-6 right_firth">
             <h5 className="elementor-heading-title elementor-size-default">Make the most of growth Opportunities</h5>
            <div className="elementor-heading-title elementor-size-default">Semper ut eget, et ultrices nulla hendrerit tortor wisi mus, quis in faucibus fermentum semper laoreet.</div>
            <div className="elementor-widget-container">
					<div className="elementor-button-wrapper" style={{textAlign:'center'}}>
			            <a href="#" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                            <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-icon elementor-align-icon-left">
                            <i aria-hidden="true" className="far fa-thumbs-up"></i>			</span>
                            <span className="elementor-button-text">Get Started</span>
                            </span>
                        </a>
                    </div>
				</div>
          </div>
          
      </section>
      <section className="row fifth">
             <p className="p_working_process"style={{textAlign:'center',width:'100%'}}>HIRE EXPERTS</p><h1 className="how_it_works"style={{textAlign:'center',width:'100%'}}>Hire Experts<span style={{color:'#11b719'}}>Team</span></h1>
            <div className="row" >
                <div className="col-md-12 desktop-slide">
                            <Slider
                        dots={true}
                        slidesToShow={3}
                        slidesToScroll={3}
                        autoplay={true}
                        autoplaySpeed={20000}
                    >
                        {renderSlides()}
                    </Slider> 
                    
                </div>
                <div className="col-md-12 mobile-slide">
                            <Slider
                        dots={true}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={20000}
                    >
                        {renderSlides()}
                    </Slider> 
                    
                </div>
                {/* <div className="col-md-4">
                    <div className="features-box-image icon">
                        <i className="flaticon-account"></i>
                    </div>
                    <div className="features-box-content">
                        <h3 className="title">search jobs</h3>
                        <div className="description">Varius duis at consectetur lorem donec massa. Consectetur adipiscing elit ut aliquam.</div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="features-box-image icon">
                        <i className="flaticon-account"></i>
                    </div>
                    <div className="features-box-content">
                        <h3 className="title">save & Apply</h3>
                        <div className="description">Massa ultricies mi quis hendrerit dolor magna eget est. Accumsan in nisl nisi scelerisque</div>
                    </div>
                </div> */}
            </div>
      </section>
      <section className="sixth container">
			<h2 className="elementor-heading-title elementor-size-default">Download Our Best Apps</h2>
			<div className="elementor-heading-title elementor-size-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore</div>		
            <div className="elementor-element elementor-element-42fcc42 elementor-align-center elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="42fcc42" data-element_type="widget" data-widget_type="button.default">
				<div className="elementor-widget-container">
					<div className="elementor-button-wrapper">
			            <a href="#" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                            <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-icon elementor-align-icon-left">
                                    <i aria-hidden="true" className="fab fa-apple"></i>	
                                </span>
                                <span className="elementor-button-text">App Store</span>
                            </span>
                        </a>
                        <a href="#" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                                <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-icon elementor-align-icon-left">
                                        <i aria-hidden="true" className="fab fa-google-play"></i>		
                                    </span>
                                    <span className="elementor-button-text">Google Play</span>
                                </span>
                            </a>
                        </div>
                    </div>
				</div>
      </section>
        {/* <Slider
            dots={false}
            slidesToShow={2}
            slidesToScroll={2}
            autoplay={true}
            autoplaySpeed={3000}
        >
            {renderSlides()}
        </Slider> */}
      <Footer/>

    </>
  );
}
export default connect(
    null,
    {...categoryDuck.actions, ...userDuck.actions, ...jobDuck.actions, ...bidDuck.actions}
  )(NurseDashboard)
  