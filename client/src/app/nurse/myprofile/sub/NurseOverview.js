import React from "react";
import  {Link} from "react-router-dom";
import { connect} from "react-redux";
import * as authDuck from "./../../../store/ducks/auth.duck";
import proImg from '../../../assets/default_profile.png'
import certificationImg from './../../../assets/certificationlogo.png';
import reviewImg    from '../../../../app/assets/feed.png';
// mport reviewImg from './../../../assets/feed.png';
function NurseOverview(props){
    return(
        <div className=" kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="kt-portlet kt-portlet--height-fluid">
                            <div className="kt-portlet__body">
                                <div className="kt-widget kt-widget--user-profile-3">
                                    <div className="kt-widget__top">
                                        <div className="kt-widget__media kt-hidden-">
                                             {/* <img  style={{wideth:'auto',height:'140px'}}src={props.user.profilePhoto === '' ?proImg:props.user.profilePhoto} alt="image"/> */}
                                             <img  style={{wideth:'100%',maxWidth: '120px',height:'120px'}}src={props.user.profilePhoto === '' ?proImg:props.user.profilePhoto} alt="image"/>
                                        </div>
                                        <div className="kt-widget__pic kt-widget__pic--danger kt-font-danger kt-font-boldest kt-font-light kt-hidden">
                                            JM
                                        </div>
                                        <div className="kt-widget__content">
                                            <div className="kt-widget__head">
                                                <a href="#" className="kt-widget__username">
                                                    {props.user.firstName + ' ' + props.user.lastName}
                                                    <i className="flaticon2-correct"></i>
                                                </a>
                                                <div className="kt-widget__action">
                                                    <Link to={`change-password`}><button type="button" className="btn btn-label-success btn-sm btn-upper">Change Password</button></Link>&nbsp;
                                                    <Link to={`personal-info`}><button type="button" className="btn btn-brand btn-sm btn-upper">Edit Profile</button></Link>
                                                    {/* <Link to={`change-password`}><button type="button" className="btn btn-brand btn-sm btn-upper">Edit Profile</button></Link> */}
                                                </div>
                                            </div>
                                            <div className="kt-widget__subhead">
                                                <a href="#"><i className="flaticon2-new-email"></i>{props.user.email}</a>
                                                <a href="#"><i className="flaticon2-calendar-3"></i>{props.user.title}</a>
                                                <a href="#"><i className="flaticon2-placeholder"></i>{props.user.address ? props.user.address :'Melbourne'}</a>
                                            </div>
                                            <div className="kt-widget__info">
                                                <div className="kt-widget__desc">
                                                    {props.user.summary}
                                                </div>
                                                {/* <div className="kt-widget__progress">
                                                    <div className="kt-widget__text">
                                                        Progress
                                                    </div>
                                                    <div className="progress" style={{height: '5px',width: '100%'}}>
                                                        <div className="progress-bar kt-bg-success" role="progressbar" style={{width: '65%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className="kt-widget__stats">
                                                        78%
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kt-widget__bottom">
                                        <div className="kt-widget__item">
                                            <div className="kt-widget__icon">
                                                <i className="flaticon-piggy-bank"></i>
                                            </div>
                                            <div className="kt-widget__details">
                                                <span className="kt-widget__title">Earnings</span>
                                                <span className="kt-widget__value"><span>$</span>249,500</span>
                                            </div>
                                        </div>
                                        <div className="kt-widget__item">
                                            <div className="kt-widget__icon">
                                                <i className="flaticon-confetti"></i>
                                            </div>
                                            <div className="kt-widget__details">
                                                <span className="kt-widget__title">Expances</span>
                                                <span className="kt-widget__value"><span>$</span>164,700</span>
                                            </div>
                                        </div>
                                        <div className="kt-widget__item">
                                            <div className="kt-widget__icon">
                                                <i className="flaticon-pie-chart"></i>
                                            </div>
                                            <div className="kt-widget__details">
                                                <span className="kt-widget__title">Pending Payout</span>
                                                <span className="kt-widget__value"><span>$</span>164,700</span>
                                            </div>
                                        </div>
                                        <div className="kt-widget__item">
                                            <div className="kt-widget__icon">
                                                <i className="flaticon-file-2"></i>
                                            </div>
                                            <div className="kt-widget__details">
                                                <span className="kt-widget__title">73 Tasks</span>
                                                <a href="#" className="kt-widget__value kt-font-brand">View</a>
                                            </div>
                                        </div>
                                        <div className="kt-widget__item">
                                            <div className="kt-widget__icon">
                                                <i className="flaticon-chat-1"></i>
                                            </div>
                                            <div className="kt-widget__details">
                                                <span className="kt-widget__title">648 Comments</span>
                                                <a href="#" className="kt-widget__value kt-font-brand">View</a>
                                            </div>
                                        </div>
                                        {/* <div className="kt-widget__item">
                                            <div className="kt-widget__icon">
                                                <i className="flaticon-network"></i>
                                            </div>
                                            <div className="kt-widget__details">
                                                <div className="kt-section__content kt-section__content--solid">
                                                    <div className="kt-media-group">
                                                        <a href="#" className="kt-media kt-media--sm kt-media--circle" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" title="" data-original-title="John Myer">
                                                            <img src="assets/media/users/100_1.jpg" alt="image"/>
                                                        </a>
                                                        <a href="#" className="kt-media kt-media--sm kt-media--circle" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" title="" data-original-title="Alison Brandy">
                                                            <img src="assets/media/users/100_10.jpg" alt="image"/>
                                                        </a>
                                                        <a href="#" className="kt-media kt-media--sm kt-media--circle" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" title="" data-original-title="Selina Cranson">
                                                            <img src="assets/media/users/100_11.jpg" alt="image"/>
                                                        </a>
                                                        <a href="#" className="kt-media kt-media--sm kt-media--circle" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" title="" data-original-title="Luke Walls">
                                                            <img src="assets/media/users/100_2.jpg" alt="image"/>
                                                        </a>
                                                        <a href="#" className="kt-media kt-media--sm kt-media--circle" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" title="" data-original-title="Micheal York">
                                                            <img src="assets/media/users/100_3.jpg" alt="image"/>
                                                        </a>
                                                        <a href="#" className="kt-media kt-media--sm kt-media--circle" data-toggle="kt-tooltip" data-skin="brand" data-placement="top" title="" data-original-title="Micheal York">
                                                            <span>+3</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
                            <div className="kt-portlet__head">
                                <div className="kt-portlet__head-label">
                                    <h3 className="kt-portlet__head-title">
                                        Activity
                                    </h3>
                                </div>
                            </div>
                            <div className="kt-portlet__body">
                                {props.user.reviews > 0 ?
                                
                                <div className="tab-content">
                                     <div className="tab-pane active" id="kt_widget2_tab1_content">
                                        <div className="kt-widget2">
                                            <div className="kt-widget2__item">
                                                <div id="comment-61" className="comment-list the-comment">
                                                    <div className="avatar">
                                                        <img src="https://secure.gravatar.com/avatar/?s=80&amp;d=mm&amp;r=g" width="80" height="80" alt="Avatar" className="avatar avatar-80 wp-user-avatar wp-user-avatar-80 photo avatar-default"/>
                                                    </div>
                                                    <div className="comment-box">
                                                        <div className="flex-middle-sm clearfix">
                                                            <div className="meta comment-author">
                                                                <div className="info-meta">
                                                                    <strong>
                                                                        Kathy Brown		
                                                                    </strong>
                                                                <div className="entry-date">
                                                                    <i className="flaticon-event"></i>May 5, 2020
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="star-rating clear ali-right" title="Rated 5 out of 5">
                                                            <span className="review-avg">5.0</span>
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
                                                        <div itemProp="description" className="comment-text">
                                                            <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>
                                                        </div>
                                                    </div>
                                                </div>  
                                            </div>
                                            <div className="kt-widget2__item">
                                                <div id="comment-61" className="comment-list the-comment">
                                                    <div className="avatar">
                                                        <img src="https://secure.gravatar.com/avatar/?s=80&amp;d=mm&amp;r=g" width="80" height="80" alt="Avatar" className="avatar avatar-80 wp-user-avatar wp-user-avatar-80 photo avatar-default"/>
                                                    </div>
                                                    <div className="comment-box">
                                                        <div className="flex-middle-sm clearfix">
                                                            <div className="meta comment-author">
                                                                <div className="info-meta">
                                                                    <strong>
                                                                        Kathy Brown		
                                                                    </strong>
                                                                <div className="entry-date">
                                                                    <i className="flaticon-event"></i>May 5, 2020
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="star-rating clear ali-right" title="Rated 5 out of 5">
                                                            <span className="review-avg">5.0</span>
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
                                                        <div itemProp="description" className="comment-text">
                                                            <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>
                                                        </div>
                                                    </div>
                                                </div>  
                                            </div>
                                            <div className="kt-widget2__item">
                                                <div id="comment-61" className="comment-list the-comment">
                                                    <div className="avatar">
                                                        <img src="https://secure.gravatar.com/avatar/?s=80&amp;d=mm&amp;r=g" width="80" height="80" alt="Avatar" className="avatar avatar-80 wp-user-avatar wp-user-avatar-80 photo avatar-default"/>
                                                    </div>
                                                    <div className="comment-box">
                                                        <div className="flex-middle-sm clearfix">
                                                            <div className="meta comment-author">
                                                                <div className="info-meta">
                                                                    <strong>
                                                                        Kathy Brown		
                                                                    </strong>
                                                                <div className="entry-date">
                                                                    <i className="flaticon-event"></i>May 5, 2020
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="star-rating clear ali-right" title="Rated 5 out of 5">
                                                            <span className="review-avg">5.0</span>
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
                                                        <div itemProp="description" className="comment-text">
                                                            <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>
                                                        </div>
                                                    </div>
                                                </div>  
                                            </div>
                                            <div className="kt-widget2__item">
                                                <div id="comment-61" className="comment-list the-comment">
                                                    <div className="avatar">
                                                        <img src="https://secure.gravatar.com/avatar/?s=80&amp;d=mm&amp;r=g" width="80" height="80" alt="Avatar" className="avatar avatar-80 wp-user-avatar wp-user-avatar-80 photo avatar-default"/>
                                                    </div>
                                                    <div className="comment-box">
                                                        <div className="flex-middle-sm clearfix">
                                                            <div className="meta comment-author">
                                                                <div className="info-meta">
                                                                    <strong>
                                                                        Kathy Brown		
                                                                    </strong>
                                                                <div className="entry-date">
                                                                    <i className="flaticon-event"></i>May 5, 2020
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="star-rating clear ali-right" title="Rated 5 out of 5">
                                                            <span className="review-avg">5.0</span>
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
                                                        <div itemProp="description" className="comment-text">
                                                            <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>
                                                        </div>
                                                    </div>
                                                </div>  
                                            </div>
                                            <div className="kt-widget2__item">
                                                <div id="comment-61" className="comment-list the-comment">
                                                    <div className="avatar">
                                                        <img src="https://secure.gravatar.com/avatar/?s=80&amp;d=mm&amp;r=g" width="80" height="80" alt="Avatar" className="avatar avatar-80 wp-user-avatar wp-user-avatar-80 photo avatar-default"/>
                                                    </div>
                                                    <div className="comment-box">
                                                        <div className="flex-middle-sm clearfix">
                                                            <div className="meta comment-author">
                                                                <div className="info-meta">
                                                                    <strong>
                                                                        Kathy Brown		
                                                                    </strong>
                                                                <div className="entry-date">
                                                                    <i className="flaticon-event"></i>May 5, 2020
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="star-rating clear ali-right" title="Rated 5 out of 5">
                                                            <span className="review-avg">5.0</span>
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
                                                        <div itemProp="description" className="comment-text">
                                                            <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>
                                                        </div>
                                                    </div>
                                                </div>  
                                            </div>

                                        </div>
                                    </div>
                                    
                                </div>
                            :<div className="tab-content" style={{margin:'auto'}}>
                            <img src={reviewImg} style={{width:'150px'}}></img>
                            <p style={{textAlign:'center'}}>No Reviews</p>
                                </div>}
                            </div>
                    </div>
                </div>
                </div>
                <div className="row">
                    {/* <div className="kt-portlet"> */}
                        {/* <div className="kt-portlet__body  kt-portlet__body--fit"> */}
                            {/* <div className="row row-no-padding row-col-separator-xl"> */}
                            <div className="row">
                                        <div className = "col-xl-12">
                                        <div className="kt-portlet kt-portlet--height-fluid">
                                            <div className="kt-portlet__head">
                                                <div className="kt-portlet__head-label">
                                                    <h3 className="kt-portlet__head-title">
                                                        Certifications
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="kt-portlet__body">
                                                {!props.user.certification?
                                                <div className="kt-widget4" style={{margin:'auto'}}>
                                                    <img src={certificationImg} style={{width:'100px'}}></img>
                                                                    <p>No Certications</p>
                                                </div>:
                                                    <div className="kt-widget4"> <div className="kt-widget4__item">
                                                        <span className="kt-widget4__icon">
                                                            <i className="flaticon2-line-chart"></i>
                                                        </span>
                                                        <a href="#" className="kt-widget4__title kt-widget4__title--light">
                                                            Prefereed Freelancer Program SLA 1
                                                        </a>
                                                        <span className="kt-widget4__number kt-font-info">98%</span>
                                                    </div>
                                                    <div className="kt-widget4__item">
                                                        <span className="kt-widget4__icon">
                                                            <i className="flaticon-safe-shield-protection  kt-font-success"></i>
                                                        </span>
                                                        <a href="#" className="kt-widget4__title kt-widget4__title--light">
                                                            Verified Nurse
                                                        </a>
                                                        <span className="kt-widget4__number kt-font-success">100%</span>
                                                </div></div> 
                                                }
                                                
                                            </div>
                                        </div>
                                    </div>
                                {/* <div className="col-xl-4">
                                    <div className="kt-portlet kt-portlet--height-fluid">
                                        <div className="kt-widget14">
                                            <div className="kt-widget14__header">
                                                <h3 className="kt-widget14__title">
                                                    Profit Share
                                                </h3>
                                                <span className="kt-widget14__desc">
                                                    Profit Share between customers
                                                </span>
                                            </div>
                                            <div className="kt-widget14__content">
                                                <div className="kt-widget14__chart">
                                                    <div className="kt-widget14__stat">45</div>
                                                    <canvas id="kt_chart_profit_share" style={{height: '140px', width:'140px'}}></canvas>
                                                </div>
                                                <div className="kt-widget14__legends">
                                                    <div className="kt-widget14__legend">
                                                        <span className="kt-widget14__bullet kt-bg-success"></span>
                                                        <span className="kt-widget14__stats">37% Sport Tickets</span>
                                                    </div>
                                                    <div className="kt-widget14__legend">
                                                        <span className="kt-widget14__bullet kt-bg-warning"></span>
                                                        <span className="kt-widget14__stats">47% Business Events</span>
                                                    </div>
                                                    <div className="kt-widget14__legend">
                                                        <span className="kt-widget14__bullet kt-bg-brand"></span>
                                                        <span className="kt-widget14__stats">19% Others</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="kt-portlet kt-portlet--height-fluid">
                                        <div className="kt-widget14">
                                            <div className="kt-widget14__header">
                                                <h3 className="kt-widget14__title">
                                                    Revenue Change
                                                </h3>
                                                <span className="kt-widget14__desc">
                                                    Revenue change breakdown by cities
                                                </span>
                                            </div>
                                            <div className="kt-widget14__content">
                                                <div className="kt-widget14__chart">
                                                    <div id="kt_chart_revenue_change" style={{height: '150px',width: '150px'}}></div>
                                                </div>
                                                <div className="kt-widget14__legends">
                                                    <div className="kt-widget14__legend">
                                                        <span className="kt-widget14__bullet kt-bg-success"></span>
                                                        <span className="kt-widget14__stats">+10% New York</span>
                                                    </div>
                                                    <div className="kt-widget14__legend">
                                                        <span className="kt-widget14__bullet kt-bg-warning"></span>
                                                        <span className="kt-widget14__stats">-7% London</span>
                                                    </div>
                                                    <div className="kt-widget14__legend">
                                                        <span className="kt-widget14__bullet kt-bg-brand"></span>
                                                        <span className="kt-widget14__stats">+20% California</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        {/* </div> */}
                    {/* </div> */}
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="kt-portlet kt-portlet--height-fluid">
                            <div className="kt-portlet__head">
                                <div className="kt-portlet__head-label">
                                    <h3 className="kt-portlet__head-title">
                                        Download Resume
                                    </h3>
                                </div>
                                <div className="kt-portlet__head-toolbar">
                                    {/* <a href="#" className="btn btn-label-brand btn-bold btn-sm dropdown-toggle" data-toggle="dropdown">
                                        Latest
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right">
                                        <ul className="kt-nav">
                                            <li className="kt-nav__head">
                                                Export Options
                                                <span data-toggle="kt-tooltip" data-placement="right" title="Click to learn more...">
                                                </span>
                                            </li>
                                            <li className="kt-nav__separator"></li>
                                            <li className="kt-nav__item">
                                                <a href="#" className="kt-nav__link">
                                                    <i className="kt-nav__link-icon flaticon2-drop"></i>
                                                    <span className="kt-nav__link-text">Activity</span>
                                                </a>
                                            </li>
                                            <li className="kt-nav__item">
                                                <a href="#" className="kt-nav__link">
                                                    <i className="kt-nav__link-icon flaticon2-calendar-8"></i>
                                                    <span className="kt-nav__link-text">FAQ</span>
                                                </a>
                                            </li>
                                            <li className="kt-nav__item">
                                                <a href="#" className="kt-nav__link">
                                                    <i className="kt-nav__link-icon flaticon2-telegram-logo"></i>
                                                    <span className="kt-nav__link-text">Settings</span>
                                                </a>
                                            </li>
                                            <li className="kt-nav__item">
                                                <a href="#" className="kt-nav__link">
                                                    <i className="kt-nav__link-icon flaticon2-new-email"></i>
                                                    <span className="kt-nav__link-text">Support</span>
                                                    <span className="kt-nav__link-badge">
                                                        <span className="kt-badge kt-badge--success kt-badge--rounded">5</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="kt-nav__separator"></li>
                                            <li className="kt-nav__foot">
                                                <a className="btn btn-label-danger btn-bold btn-sm" href="#">Upgrade plan</a>
                                                <a className="btn btn-clean btn-bold btn-sm" href="#" data-toggle="kt-tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                            <div className="kt-portlet__body">
                                <div className="kt-widget4">
                                    <div className="kt-widget4__item">
                                        <div className="kt-widget4__pic kt-widget4__pic--icon">
                                            <img src="assets/media/files/doc.svg" alt=""/>
                                        </div>
                                        <a href="#" className="kt-widget4__title">
                                            Metronic Documentation
                                        </a>
                                        <div className="kt-widget4__tools">
                                            <a href="#" className="btn btn-clean btn-icon btn-sm">
                                                <i className="flaticon2-download-symbol-of-down-arrow-in-a-rectangle"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="kt-widget4__item">
                                        <div className="kt-widget4__pic kt-widget4__pic--icon">
                                            <img src="assets/media/files/jpg.svg" alt=""/>
                                        </div>
                                        <a href="#" className="kt-widget4__title">
                                            Project Launch Event
                                        </a>
                                        <div className="kt-widget4__tools">
                                            <a href="#" className="btn btn-clean btn-icon btn-sm">
                                                <i className="flaticon2-download-symbol-of-down-arrow-in-a-rectangle"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="kt-widget4__item">
                                        <div className="kt-widget4__pic kt-widget4__pic--icon">
                                            <img src="assets/media/files/pdf.svg" alt=""/>
                                        </div>
                                        <a href="#" className="kt-widget4__title">
                                            Full Developer Manual For 4.7
                                        </a>
                                        <div className="kt-widget4__tools">
                                            <a href="#" className="btn btn-clean btn-icon btn-sm">
                                                <i className="flaticon2-download-symbol-of-down-arrow-in-a-rectangle"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="kt-widget4__item">
                                        <div className="kt-widget4__pic kt-widget4__pic--icon">
                                            <img src="assets/media/files/javascript.svg" alt=""/>
                                        </div>
                                        <a href="#" className="kt-widget4__title">
                                            Make JS Development
                                        </a>
                                        <div className="kt-widget4__tools">
                                            <a href="#" className="btn btn-clean btn-icon btn-sm">
                                                <i className="flaticon2-download-symbol-of-down-arrow-in-a-rectangle"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="kt-widget4__item">
                                        <div className="kt-widget4__pic kt-widget4__pic--icon">
                                            <img src="assets/media/files/zip.svg" alt=""/>
                                        </div>
                                        <a href="#" className="kt-widget4__title">
                                            Download Ziped version OF 5.0
                                        </a>
                                        <div className="kt-widget4__tools">
                                            <a href="#" className="btn btn-clean btn-icon btn-sm">
                                                <i className="flaticon2-download-symbol-of-down-arrow-in-a-rectangle"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="kt-widget4__item">
                                        <div className="kt-widget4__pic kt-widget4__pic--icon">
                                            <img src="assets/media/files/pdf.svg" alt=""/>
                                        </div>
                                        <a href="#" className="kt-widget4__title">
                                            Finance Report 2016/2017
                                        </a>
                                        <div className="kt-widget4__tools">
                                            <a href="#" className="btn btn-clean btn-icon btn-sm">
                                                <i className="flaticon2-download-symbol-of-down-arrow-in-a-rectangle"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="kt-portlet kt-portlet--height-fluid">
                            <div className="kt-portlet__head">
                                <div className="kt-portlet__head-label">
                                    <h3 className="kt-portlet__head-title">
                                        User Progress
                                    </h3>
                                </div>
                                <div className="kt-portlet__head-toolbar">
                                    {/* <ul className="nav nav-pills nav-pills-sm nav-pills-label nav-pills-bold" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="tab" href="#kt_widget31_tab1_content" role="tab">
                                                Today
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#kt_widget31_tab2_content" role="tab">
                                                Week
                                            </a>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                            <div className="kt-portlet__body">
                                <div className="tab-content">
                                    <div className="tab-pane active" id="kt_widget31_tab1_content">
                                        <div className="kt-widget31">
                                            <div className="kt-widget31__item">
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__pic">
                                                        <img src="assets/media/users/100_4.jpg" alt=""/>
                                                    </div>
                                                    <div className="kt-widget31__info">
                                                        <a href="#" className="kt-widget31__username">
                                                            Anna Strong
                                                        </a>
                                                        <p className="kt-widget31__text">
                                                            Visual Designer,Google Inc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__progress">
                                                        <a href="#" className="kt-widget31__stats">
                                                            <span>63%</span>
                                                            <span>London</span>
                                                        </a>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-brand" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="btn-label-brand btn btn-sm btn-bold">Follow</a>
                                                </div>
                                            </div>
                                            <div className="kt-widget31__item">
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__pic">
                                                        <img src="assets/media/users/100_14.jpg" alt=""/>
                                                    </div>
                                                    <div className="kt-widget31__info">
                                                        <a href="#" className="kt-widget31__username">
                                                            Milano Esco
                                                        </a>
                                                        <p className="kt-widget31__text">
                                                            Product Designer, Apple Inc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__progress">
                                                        <a href="#" className="kt-widget31__stats">
                                                            <span>33%</span>
                                                            <span>Paris</span>
                                                        </a>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="btn-label-brand btn btn-sm btn-bold">Follow</a>
                                                </div>
                                            </div>
                                            <div className="kt-widget31__item">
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__pic kt-widget4__pic--pic">
                                                        <img src="assets/media/users/100_11.jpg" alt=""/>
                                                    </div>
                                                    <div className="kt-widget31__info">
                                                        <a href="#" className="kt-widget31__username">
                                                            Nick Bold
                                                        </a>
                                                        <p className="kt-widget31__text">
                                                            Web Developer, Facebook Inc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__progress">
                                                        <a href="#" className="kt-widget31__stats">
                                                            <span>13%</span>
                                                            <span>London</span>
                                                        </a>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-info" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="btn-label-brand btn btn-sm btn-bold">Follow</a>
                                                </div>
                                            </div>
                                            <div className="kt-widget31__item">
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__pic kt-widget4__pic--pic">
                                                        <img src="assets/media/users/100_1.jpg" alt=""/>
                                                    </div>
                                                    <div className="kt-widget31__info">
                                                        <a href="#" className="kt-widget31__username">
                                                            Wiltor Delton
                                                        </a>
                                                        <p className="kt-widget31__text">
                                                            Project Manager, Amazon Inc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__progress">
                                                        <div className="kt-widget31__stats">
                                                            <span>93%</span>
                                                            <span>New York</span>
                                                        </div>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '45%'}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="btn-label-brand btn btn-sm btn-bold">Follow</a>
                                                </div>
                                            </div>
                                            <div className="kt-widget31__item">
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__pic">
                                                        <img src="assets/media/users/100_6.jpg" alt=""/>
                                                    </div>
                                                    <div className="kt-widget31__info">
                                                        <a href="#" className="kt-widget31__username">
                                                            Sam Stone
                                                        </a>
                                                        <p className="kt-widget31__text">
                                                            Project Manager, Kilpo Inc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__progress">
                                                        <div className="kt-widget31__stats">
                                                            <span>50%</span>
                                                            <span>New York</span>
                                                        </div>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-success" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="btn-label-brand btn btn-sm btn-bold">Follow</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="kt_widget31_tab2_content">
                                        <div className="kt-widget31">
                                            <div className="kt-widget31__item">
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__pic kt-widget4__pic--pic">
                                                        <img src="assets/media/users/100_11.jpg" alt=""/>
                                                    </div>
                                                    <div className="kt-widget31__info">
                                                        <a href="#" className="kt-widget31__username">
                                                            Nick Bold
                                                        </a>
                                                        <p className="kt-widget31__text">
                                                            Web Developer, Facebook Inc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__progress">
                                                        <a href="#" className="kt-widget31__stats">
                                                            <span>13%</span>
                                                            <span>London</span>
                                                        </a>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-info" role="progressbar" style={{width:"35%"}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="btn-label-brand btn btn-sm btn-bold">Follow</a>
                                                </div>
                                            </div>
                                            <div className="kt-widget31__item">
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__pic kt-widget4__pic--pic">
                                                        <img src="assets/media/users/100_1.jpg" alt=""/>
                                                    </div>
                                                    <div className="kt-widget31__info">
                                                        <a href="#" className="kt-widget31__username">
                                                            Wiltor Delton
                                                        </a>
                                                        <p className="kt-widget31__text">
                                                            Project Manager, Amazon Inc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__progress">
                                                        <div className="kt-widget31__stats">
                                                            <span>93%</span>
                                                            <span>New York</span>
                                                        </div>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '45%'}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="btn-label-brand btn btn-sm btn-bold">Follow</a>
                                                </div>
                                            </div>
                                            <div className="kt-widget31__item">
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__pic">
                                                        <img src="assets/media/users/100_14.jpg" alt=""/>
                                                    </div>
                                                    <div className="kt-widget31__info">
                                                        <a href="#" className="kt-widget31__username">
                                                            Milano Esco
                                                        </a>
                                                        <p className="kt-widget31__text">
                                                            Product Designer, Apple Inc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__progress">
                                                        <a href="#" className="kt-widget31__stats">
                                                            <span>33%</span>
                                                            <span>Paris</span>
                                                        </a>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-warning" role="progressbar" style={{width: "55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="btn-label-brand btn btn-sm btn-bold">Follow</a>
                                                </div>
                                            </div>
                                            <div className="kt-widget31__item">
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__pic">
                                                        <img src="assets/media/users/100_6.jpg" alt=""/>
                                                    </div>
                                                    <div className="kt-widget31__info">
                                                        <a href="#" className="kt-widget31__username">
                                                            Sam Stone
                                                        </a>
                                                        <p className="kt-widget31__text">
                                                            Project Manager, Kilpo Inc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__progress">
                                                        <div className="kt-widget31__stats">
                                                            <span>50%</span>
                                                            <span>New York</span>
                                                        </div>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-success" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="btn-label-brand btn btn-sm btn-bold">Follow</a>
                                                </div>
                                            </div>
                                            <div className="kt-widget31__item">
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__pic">
                                                        <img src="assets/media/users/100_4.jpg" alt=""/>
                                                    </div>
                                                    <div className="kt-widget31__info">
                                                        <a href="#" className="kt-widget31__username">
                                                            Anna Strong
                                                        </a>
                                                        <p className="kt-widget31__text">
                                                            Visual Designer,Google Inc
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="kt-widget31__content">
                                                    <div className="kt-widget31__progress">
                                                        <a href="#" className="kt-widget31__stats">
                                                            <span>63%</span>
                                                            <span>London</span>
                                                        </a>
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-brand" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="btn-label-brand btn btn-sm btn-bold">Follow</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <div className="row">
                    <div className="col-xl-6">
                        <div className="kt-portlet kt-portlet--height-fluid">
                            <div className="kt-portlet__head">
                                <div className="kt-portlet__head-label">
                                    <h3 className="kt-portlet__head-title">
                                        Latest Updates
                                    </h3>
                                </div>
                                <div className="kt-portlet__head-toolbar">
                                </div>
                            </div>
                            <div className="kt-portlet__body">
                                <div className="kt-widget4">
                                    <div className="kt-widget4__item">
                                        <span className="kt-widget4__icon">
                                            <i className="flaticon-pie-chart-1 kt-font-info"></i>
                                        </span>
                                        <a href="#" className="kt-widget4__title kt-widget4__title--light">
                                            Metronic v6 has been arrived!
                                        </a>
                                        <span className="kt-widget4__number kt-font-info">+500</span>
                                    </div>
                                    <div className="kt-widget4__item">
                                        <span className="kt-widget4__icon">
                                            <i className="flaticon-safe-shield-protection  kt-font-success"></i>
                                        </span>
                                        <a href="#" className="kt-widget4__title kt-widget4__title--light">
                                            Metronic community meet-up 2019 in Rome.
                                        </a>
                                        <span className="kt-widget4__number kt-font-success">+1260</span>
                                    </div>
                                    <div className="kt-widget4__item">
                                        <span className="kt-widget4__icon">
                                            <i className="flaticon2-line-chart kt-font-danger"></i>
                                        </span>
                                        <a href="#" className="kt-widget4__title kt-widget4__title--light">
                                            Metronic Angular 8 version will be landing soon...
                                        </a>
                                        <span className="kt-widget4__number kt-font-danger">+1080</span>
                                    </div>
                                    <div className="kt-widget4__item">
                                        <span className="kt-widget4__icon">
                                            <i className="flaticon2-pie-chart-1 kt-font-primary"></i>
                                        </span>
                                        <a href="#" className="kt-widget4__title kt-widget4__title--light">
                                            ale! Purchase Metronic at 70% off for limited time
                                        </a>
                                        <span className="kt-widget4__number kt-font-primary">70% Off!</span>
                                    </div>
                                    <div className="kt-widget4__item">
                                        <span className="kt-widget4__icon">
                                            <i className="flaticon2-rocket kt-font-brand"></i>
                                        </span>
                                        <a href="#" className="kt-widget4__title kt-widget4__title--light">
                                            Metronic VueJS version is in progress. Stay tuned!
                                        </a>
                                        <span className="kt-widget4__number kt-font-brand">+134</span>
                                    </div>
                                    <div className="kt-widget4__item">
                                        <span className="kt-widget4__icon">
                                            <i className="flaticon2-notification kt-font-warning"></i>
                                        </span>
                                                <a href="#" className="kt-widget4__title kt-widget4__title--light">
                                                    Black Friday! Purchase Metronic at ever lowest 90% off for limited time
                                                </a>
                                                <span className="kt-widget4__number kt-font-warning">70% Off!</span>
                                            </div>
                                            <div className="kt-widget4__item">
                                                <span className="kt-widget4__icon">
                                                    <i className="flaticon2-file kt-font-success"></i>
                                                </span>
                                                <a href="#" className="kt-widget4__title kt-widget4__title--light">
                                                    Metronic React version is in progress.
                                                </a>
                                                <span className="kt-widget4__number kt-font-success">+13%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="kt-portlet kt-portlet--height-fluid">
                                    <div className="kt-portlet__head">
                                        <div className="kt-portlet__head-label">
                                            <h3 className="kt-portlet__head-title">
                                                Notifications
                                            </h3>
                                        </div>
                                        <div className="kt-portlet__head-toolbar">
                                            
                                        </div>
                                    </div>
                                    <div className="kt-portlet__body">
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="kt_widget6_tab1_content" aria-expanded="true">
                                                <div className="kt-notification">
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                          
                                                            </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New order has been received.
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                2 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                        
                                                                </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New member is registered and pending for approval.
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                3 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                           
                                                            </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                Membership application has been added.
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                3 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                          
                                                            </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New report file has been uploaded.
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                5 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                          
                                                            </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New user feedback received and pending for review.
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                8 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                           
                                                                </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                Database sever #2 has been fully restarted.
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                23 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="kt_widget6_tab2_content" aria-expanded="false">
                                                <div className="kt-notification">
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            
                                                                </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New company application has been approved.
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                3 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            
                                                            </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New report has been received.
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                23 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                            
                                                                </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New file has been uploaded and pending for review.
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                5 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                         
                                                            </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                Membership application has been added.
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                3 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                         
                                                            </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New customer is registered.
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                3 days ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="kt_widget6_tab3_content" aria-expanded="false">
                                                <div className="kt-notification">
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                           
                                                                </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New order has been received.
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                2 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                           
                                                                </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New customer is registered
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                3 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                           
                                                            </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                Application has been approved
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                3 hrs ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                         
                                                            </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New customer comment recieved
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                2 days ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="#" className="kt-notification__item">
                                                        <div className="kt-notification__item-icon">
                                                           
                                                            </div>
                                                        <div className="kt-notification__item-details">
                                                            <div className="kt-notification__item-title">
                                                                New customer is registered
                                                            </div>
                                                            <div className="kt-notification__item-time">
                                                                3 days ago
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
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
)(NurseOverview);