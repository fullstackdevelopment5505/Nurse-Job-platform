import React from "react";
import { connect} from "react-redux";
import * as authDuck from "./../../../store/ducks/auth.duck";
import './overview.scss';  
import reviewImg    from '../../../../app/assets/feed.png'; 
// import reviewImg    from '../../../../app/assets/feed.png';
import certificationImg from './../../../assets/certificationlogo.png';
function Overview(props){
    return(
        <div className="kt-grid__item kt-grid__item--fluid kt-app__content">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="kt-portlet kt-portlet--height-fluid">
                                <div className="kt-portlet__head">
                                    <div className="kt-portlet__head-label">
                                        <h3 className="kt-portlet__head-title">
                                            Overview
                                        </h3>
                                    </div>
                                </div>
                                <div className="kt-portlet__body">
                                    <div className="row">
                                            <h3 className="kt-portlet__head-title">
                                             {(props.user.title !=='' && props.user.title) ? props.user.title : 'None'} 
                                            </h3>
                                        <br/>
                                    </div>
                                    <div className="row">
                                        <h2 style={{backgroundColor: props.user.reviewRating > 3.5 ?'#f9be42':'#e2e2e2',color: 'white',fontSize: '1.5rem',margin: 'auto 0',    marginRight: '10px'}}>{props.user.reviewRating?props.user.reviewRating:'0.0'}</h2>
                                        <div className="rating-avg-star" style={{fontSize:'1rem',margin:'auto 0'}}>	  
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
                                                        {Array.from(Array(Math.floor(props.user.reviewRating?props.user.reviewRating:0)), (e, i) => {
                                                            return <li key={i}><span className="fa fa-star"></span></li>
                                                        })}
                                                        {(props.user.reviewRating * 10 %10 > 0)?<li><span className="fa fa-star-half"></span></li>:<></> }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <h2 style={{fontSize: '1rem',margin: 'auto 0',marginLeft:'5px'}}>( {props.user.reviews?props.user.review:'0'} reviews )</h2>
                                    </div>
                              
                                    <p style={{marginTop:'10px'}}>
                                        {props.user.summary === ''?'No Summary':props.user.summary}
                                    {/* Dolor sed viverra ipsum nunc. In ornare quam viverra orci. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Non diam phasellus vestibulum lorem sed risus ultricies. Lacinia at quis risus sed vulputate odio ut enim blandit. Suspendisse ultrices gravida dictum fusce ut. */}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className = "col-xl-4">
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
                    <div className="row">
                        {/* <div className="col-xl-6">
                            <div className="kt-portlet kt-portlet--height-fluid">
                                <div className="kt-portlet__head">
                                    <div className="kt-portlet__head-label">
                                        <h3 className="kt-portlet__head-title">
                                            Reviews
                                        </h3>
                                    </div>
                                </div>
                                <div className="kt-portlet__body kt-portlet__body--fluid">
                                    <div className="kt-widget12">
                                        <div className="kt-widget12__content">
                                            <div className="kt-widget12__item">
                                                <div className="kt-widget12__info">
                                                    <span className="kt-widget12__desc">Annual Taxes EMS</span>
                                                    <span className="kt-widget12__value">$400,000</span>
                                                </div>
                                                <div className="kt-widget12__info">
                                                    <span className="kt-widget12__desc">Finance Review Date</span>
                                                    <span className="kt-widget12__value">July 24,2019</span>
                                                </div>
                                            </div>
                                            <div className="kt-widget12__item">
                                                <div className="kt-widget12__info">
                                                    <span className="kt-widget12__desc">Avarage Revenue</span>
                                                    <span className="kt-widget12__value">$60M</span>
                                                </div>
                                                <div className="kt-widget12__info">
                                                    <span className="kt-widget12__desc">Revenue Margin</span>
                                                    <div className="kt-widget12__progress">
                                                        <div className="progress kt-progress--sm">
                                                            <div className="progress-bar kt-bg-brand" role="progressbar" style={{width: '40%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span className="kt-widget12__stat">
                                                            40%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="kt-widget12__chart" style={{height:'250px'}}>
                                            <canvas id="kt_chart_order_statistics"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
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
                    </div></div>
                    <div className="row">
                        {/* <div className="col-xl-6">
                            <div className="kt-portlet kt-portlet--height-fluid">
                                <div className="kt-portlet__head">
                                    <div className="kt-portlet__head-label">
                                        <h3 className="kt-portlet__head-title">
                                            Certifications
                                        </h3>
                                    </div>
                                </div>
                                <div className="kt-portlet__body">
                                    <div className="kt-widget4">
                                        <div className="kt-widget4__item">
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
                                        </div>
                                        <div className="kt-widget4__item">
                                            <span className="kt-widget4__icon">
                                                <i className="flaticon2-line-chart kt-font-danger"></i>
                                            </span>
                                            <a href="#" className="kt-widget4__title kt-widget4__title--light">
                                                Nurse Angular 8 version will be landing soon...
                                            </a>
                                            <span className="kt-widget4__number kt-font-danger">+1080</span>
                                        </div>
                                        <div className="kt-widget4__item">
                                            <span className="kt-widget4__icon">
                                                <i className="flaticon2-pie-chart-1 kt-font-primary"></i>
                                            </span>
                                            <a href="#" className="kt-widget4__title kt-widget4__title--light">
                                                ale! Purchase Nurse at 70% off for limited time
                                            </a>
                                            <span className="kt-widget4__number kt-font-primary">70% Off!</span>
                                        </div>
                                        <div className="kt-widget4__item">
                                            <span className="kt-widget4__icon">
                                                <i className="flaticon2-rocket kt-font-brand"></i>
                                            </span>
                                            <a href="#" className="kt-widget4__title kt-widget4__title--light">
                                                Nurse VueJS version is in progress. Stay tuned!
                                            </a>
                                            <span className="kt-widget4__number kt-font-brand">+134</span>
                                        </div>
                                        <div className="kt-widget4__item">
                                            <span className="kt-widget4__icon">
                                                <i className="flaticon2-notification kt-font-warning"></i>
                                            </span>
                                            <a href="#" className="kt-widget4__title kt-widget4__title--light">
                                                Black Friday! Purchase Nurse at ever lowest 90% off for limited time
                                            </a>
                                            <span className="kt-widget4__number kt-font-warning">70% Off!</span>
                                        </div>
                                        <div className="kt-widget4__item">
                                            <span className="kt-widget4__icon">
                                                <i className="flaticon2-file kt-font-success"></i>
                                            </span>
                                            <a href="#" className="kt-widget4__title kt-widget4__title--light">
                                                Nurse React version is in progress.
                                            </a>
                                            <span className="kt-widget4__number kt-font-success">+13%</span>
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
)(Overview);