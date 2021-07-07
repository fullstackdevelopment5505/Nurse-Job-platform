import React , { useEffect, useState }from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../nurse/layout/Header";
import Footer from "../../nurse/layout/Footer";
import { connect} from "react-redux";
import './SearchNurse.scss'
import BreadCrumb from "../layout/BreadCrumb";
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import {
    TextField,
} from "@material-ui/core";
import {
    makeStyles,
} from "@material-ui/core/styles";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import * as actions from '../../../app/actions';
import * as authDuck from '../../../app/store/ducks/auth.duck';
import * as activityDuck from '../../../app/store/ducks/activity.duck';
import * as categoryDuck from '../../../app/store/ducks/category.duck';
import * as userDuck from '../../../app/store/ducks/user.duck';
import * as bidDuck from '../../../app/store/ducks/bid.duck';
import default_img from './../../assets/default_profile.png';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
const marks1 = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 100,
      label: '5',
    },
  ];
const marks = [
    {
      value: 0,
      label: '0 $',
    },
    {
      value: 100,
      label: '10000 $',
    },
  ];
  function valuetext(value) {
    return `${value} $`;
  }
  function valueLabelFormat(value) {
    return value * 100    ;
  }
  function valueLabelFormat1(value) {
    return value / 20    ;
  }
function SearchNurse(props) {
    const [addsnack, setAddsnack] = React.useState(false);
    const [minValue, setMinValue]= React.useState(0);
    const [subText, setSubText]= React.useState('');
    const [advanceflag,setAdvanceflag] = React.useState(false);
    const [allcategory, setAllcategory]= React.useState([]);
    const [filterCategory, setFilterCategory] = React.useState('All Category');
    const [filterLocation, setFilterLocation] = React.useState('All Locations');
    const [filterRangeBudget, setFilterRangeBudget] = React.useState([0,100]);
    const [filterReview, setFilterReview] = React.useState([0,100]);
    const [allnurses, setAllnurses]= React.useState([]);
    const [selected, setSelected] = React.useState();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const history = useHistory();
    const [values, setValues] = React.useState({
            name: 'Cat in the Hat',
            age: '',
            multiline: 'Controlled',
            currency: 'EUR',
        });
        const filterBtn = () =>{
            var obj={};
            if(subText !== '')
                Object.assign(obj, {subText:subText})
            Object.assign(obj, {'category':filterCategory});
            Object.assign(obj, {'location':filterLocation});
            Object.assign(obj, {'review':1});
            Object.assign(obj, {'budget':1});
            setSelected(obj)
          var tempArr = props.nurses;
          tempArr = tempArr.filter(sub=>{
              console.log('sub',sub.category)
              console.log(filterCategory)
              if(obj['subText'] && sub.title.indexOf(obj['subText'])=== -1)
                  return false;
              if(filterCategory !== 'All Category' && sub.category && sub.category._id !== filterCategory)
                  return false;
              if(filterRangeBudget[1] * 100 < sub.salary && filterRangeBudget[0]*100 > sub.salary)
                  return false;
              return true;
              
          });
          // console.log('2)')
          // console.log(tempArr)
              setAllnurses(tempArr)
              console.log('-- filter --')
              console.log(props.jobs)
              // console.log(alljobs)
        }
const useStyles = makeStyles(theme => ({
        container: {
        display: "flex",
        flexWrap: "wrap"
        },
        textField1:{
            marginLeft:'5px',
            marginRight:'5px'
        },
        textField: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        marginTop: '8px',
        marginBottom: '8px',
        },
        dense: {
        marginTop: theme.spacing(2)
        },
        menu: {
        width: 200
        },
        termps_check:{
        marginRight:'3px'
        }
    }));
    const removeOneSelect = key =>{
        var obj= selected;
        delete obj[key];
        handleClearAll();
      //   setSelected(obj);
    }
    function handleAddsnackClose() {
        setAddsnack(false);
      }
    const handleClearAll = ()=>{
        setSelected(null);
        setFilterCategory('All Category')
        setFilterLocation('All Locations')
        setFilterRangeBudget([0,100])
        setFilterReview([0,100])
        setSubText('')
          setAllnurses([]);
    }
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    function handleChangePage(event, newPage) {
        setPage(newPage);
    }
    
    function handleChangeRowsPerPage(event) {
        setRowsPerPage(+event.target.value);
    }
    
    const isSelected = name => selected.indexOf(name) !== -1;
    
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, allnurses.length - page * rowsPerPage);
    
    const classes = useStyles();
    useEffect(() => {
        setAllcategory(props.allcategories || []);
        setAllnurses(props.nurses || []);
    }, [props])
    return (
    <>
    <Header/>
    <BreadCrumb title="Nurse Directory" base="Home"/>
    <section className="jobs widget-filter-top" style={{backgroundColor:'white'}}>
        <div className="container">
            <FormGroup row>
                <div className="col-lg-9 col-xs-12">
                    <div className="row">
                        <div className="col-md-4">
                            <TextField
                                id="standard-bare"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                value={subText}
                                onChange={(e)=>{setSubText(e.target.value);}}
                                placeholder="e.g. talented job"
                                inputProps={{ "aria-label": "bare" }}
                            />
                        </div>
                        <div className="col-md-4">
                                <TextField
                                id="outlined-select-currency"
                                select
                                placeholder="Category"
                                className={classes.textField}
                                value={filterCategory}
                                onChange={(e)=>{setFilterCategory(e.target.value);}}
                                SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                                }}
                                margin="normal"
                                variant="outlined"
                            >
                                <MenuItem key='All Category' value='All Category'>
                                    Filter by Category
                                </MenuItem>
                                {allcategory.map(option => (
                                <MenuItem key={option._id} value={option._id}>
                                    {option.name}
                                </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div className="col-md-4">
                            <TextField
                                id="outlined-select-currency"
                                select
                                placeholder="Filter by Location"
                                className={classes.textField}
                                value={filterLocation}
                                onChange={(e)=>{setFilterLocation(e.target.value);}}
                                SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                                }}
                                margin="normal"
                                variant="outlined"
                            >
                                <MenuItem key='All Locations' value='All Locations'>
                                    Filter by Location
                                </MenuItem>

                                {/* <MenuItem key={option._id} value={option._id}>  {option.name}  </MenuItem> */}
                                <MenuItem value="AF">Afghanistan</MenuItem>
                                <MenuItem value="AX">Åland Islands</MenuItem>
                                <MenuItem value="AL">Albania</MenuItem>
                                <MenuItem value="DZ">Algeria</MenuItem>
                                <MenuItem value="AS">American Samoa</MenuItem>
                                <MenuItem value="AD">Andorra</MenuItem>
                                <MenuItem value="AO">Angola</MenuItem>
                                <MenuItem value="AI">Anguilla</MenuItem>
                                <MenuItem value="AQ">Antarctica</MenuItem>
                                <MenuItem value="AG">Antigua and Barbuda</MenuItem>
                                <MenuItem value="AR">Argentina</MenuItem>
                                <MenuItem value="AM">Armenia</MenuItem>
                                <MenuItem value="AW">Aruba</MenuItem>
                                <MenuItem value="AU">Australia</MenuItem>
                                <MenuItem value="AT">Austria</MenuItem>
                                <MenuItem value="AZ">Azerbaijan</MenuItem>
                                <MenuItem value="BS">Bahamas</MenuItem>
                                <MenuItem value="BH">Bahrain</MenuItem>
                                <MenuItem value="BD">Bangladesh</MenuItem>
                                <MenuItem value="BB">Barbados</MenuItem>
                                <MenuItem value="BY">Belarus</MenuItem>
                                <MenuItem value="BE">Belgium</MenuItem>
                                <MenuItem value="BZ">Belize</MenuItem>
                                <MenuItem value="BJ">Benin</MenuItem>
                                <MenuItem value="BM">Bermuda</MenuItem>
                                <MenuItem value="BT">Bhutan</MenuItem>
                                <MenuItem value="BO">Bolivia, Plurinational State of</MenuItem>
                                <MenuItem value="BQ">Bonaire, Sint Eustatius and Saba</MenuItem>
                                <MenuItem value="BA">Bosnia and Herzegovina</MenuItem>
                                <MenuItem value="BW">Botswana</MenuItem>
                                <MenuItem value="BV">Bouvet Island</MenuItem>
                                <MenuItem value="BR">Brazil</MenuItem>
                                <MenuItem value="IO">British Indian Ocean Territory</MenuItem>
                                <MenuItem value="BN">Brunei Darussalam</MenuItem>
                                <MenuItem value="BG">Bulgaria</MenuItem>
                                <MenuItem value="BF">Burkina Faso</MenuItem>
                                <MenuItem value="BI">Burundi</MenuItem>
                                <MenuItem value="KH">Cambodia</MenuItem>
                                <MenuItem value="CM">Cameroon</MenuItem>
                                <MenuItem value="CA">Canada</MenuItem>
                                <MenuItem value="CV">Cape Verde</MenuItem>
                                <MenuItem value="KY">Cayman Islands</MenuItem>
                                <MenuItem value="CF">Central African Republic</MenuItem>
                                <MenuItem value="TD">Chad</MenuItem>
                                <MenuItem value="CL">Chile</MenuItem>
                                <MenuItem value="CN">China</MenuItem>
                                <MenuItem value="CX">Christmas Island</MenuItem>
                                <MenuItem value="CC">Cocos (Keeling) Islands</MenuItem>
                                <MenuItem value="CO">Colombia</MenuItem>
                                <MenuItem value="KM">Comoros</MenuItem>
                                <MenuItem value="CG">Congo</MenuItem>
                                <MenuItem value="CD">Congo, the Democratic Republic of the</MenuItem>
                                <MenuItem value="CK">Cook Islands</MenuItem>
                                <MenuItem value="CR">Costa Rica</MenuItem>
                                <MenuItem value="CI">Côte d'Ivoire</MenuItem>
                                <MenuItem value="HR">Croatia</MenuItem>
                                <MenuItem value="CU">Cuba</MenuItem>
                                <MenuItem value="CW">Curaçao</MenuItem>
                                <MenuItem value="CY">Cyprus</MenuItem>
                                <MenuItem value="CZ">Czech Republic</MenuItem>
                                <MenuItem value="DK">Denmark</MenuItem>
                                <MenuItem value="DJ">Djibouti</MenuItem>
                                <MenuItem value="DM">Dominica</MenuItem>
                                <MenuItem value="DO">Dominican Republic</MenuItem>
                                <MenuItem value="EC">Ecuador</MenuItem>
                                <MenuItem value="EG">Egypt</MenuItem>
                                <MenuItem value="SV">El Salvador</MenuItem>
                                <MenuItem value="GQ">Equatorial Guinea</MenuItem>
                                <MenuItem value="ER">Eritrea</MenuItem>
                                <MenuItem value="EE">Estonia</MenuItem>
                                <MenuItem value="ET">Ethiopia</MenuItem>
                                <MenuItem value="FK">Falkland Islands (Malvinas)</MenuItem>
                                <MenuItem value="FO">Faroe Islands</MenuItem>
                                <MenuItem value="FJ">Fiji</MenuItem>
                                <MenuItem value="FI">Finland</MenuItem>
                                <MenuItem value="FR">France</MenuItem>
                                <MenuItem value="GF">French Guiana</MenuItem>
                                <MenuItem value="PF">French Polynesia</MenuItem>
                                <MenuItem value="TF">French Southern Territories</MenuItem>
                                <MenuItem value="GA">Gabon</MenuItem>
                                <MenuItem value="GM">Gambia</MenuItem>
                                <MenuItem value="GE">Georgia</MenuItem>
                                <MenuItem value="DE">Germany</MenuItem>
                                <MenuItem value="GH">Ghana</MenuItem>
                                <MenuItem value="GI">Gibraltar</MenuItem>
                                <MenuItem value="GR">Greece</MenuItem>
                                <MenuItem value="GL">Greenland</MenuItem>
                                <MenuItem value="GD">Grenada</MenuItem>
                                <MenuItem value="GP">Guadeloupe</MenuItem>
                                <MenuItem value="GU">Guam</MenuItem>
                                <MenuItem value="GT">Guatemala</MenuItem>
                                <MenuItem value="GG">Guernsey</MenuItem>
                                <MenuItem value="GN">Guinea</MenuItem>
                                <MenuItem value="GW">Guinea-Bissau</MenuItem>
                                <MenuItem value="GY">Guyana</MenuItem>
                                <MenuItem value="HT">Haiti</MenuItem>
                                <MenuItem value="HM">Heard Island and McDonald Islands</MenuItem>
                                <MenuItem value="VA">Holy See (Vatican City State)</MenuItem>
                                <MenuItem value="HN">Honduras</MenuItem>
                                <MenuItem value="HK">Hong Kong</MenuItem>
                                <MenuItem value="HU">Hungary</MenuItem>
                                <MenuItem value="IS">Iceland</MenuItem>
                                <MenuItem value="IN">India</MenuItem>
                                <MenuItem value="ID">Indonesia</MenuItem>
                                <MenuItem value="IR">Iran, Islamic Republic of</MenuItem>
                                <MenuItem value="IQ">Iraq</MenuItem>
                                <MenuItem value="IE">Ireland</MenuItem>
                                <MenuItem value="IM">Isle of Man</MenuItem>
                                <MenuItem value="IL">Israel</MenuItem>
                                <MenuItem value="IT">Italy</MenuItem>
                                <MenuItem value="JM">Jamaica</MenuItem>
                                <MenuItem value="JP">Japan</MenuItem>
                                <MenuItem value="JE">Jersey</MenuItem>
                                <MenuItem value="JO">Jordan</MenuItem>
                                <MenuItem value="KZ">Kazakhstan</MenuItem>
                                <MenuItem value="KE">Kenya</MenuItem>
                                <MenuItem value="KI">Kiribati</MenuItem>
                                <MenuItem value="KP">Korea, Democratic People's Republic of</MenuItem>
                                <MenuItem value="KR">Korea, Republic of</MenuItem>
                                <MenuItem value="KW">Kuwait</MenuItem>
                                <MenuItem value="KG">Kyrgyzstan</MenuItem>
                                <MenuItem value="LA">Lao People's Democratic Republic</MenuItem>
                                <MenuItem value="LV">Latvia</MenuItem>
                                <MenuItem value="LB">Lebanon</MenuItem>
                                <MenuItem value="LS">Lesotho</MenuItem>
                                <MenuItem value="LR">Liberia</MenuItem>
                                <MenuItem value="LY">Libya</MenuItem>
                                <MenuItem value="LI">Liechtenstein</MenuItem>
                                <MenuItem value="LT">Lithuania</MenuItem>
                                <MenuItem value="LU">Luxembourg</MenuItem>
                                <MenuItem value="MO">Macao</MenuItem>
                                <MenuItem value="MK">Macedonia, the former Yugoslav Republic of</MenuItem>
                                <MenuItem value="MG">Madagascar</MenuItem>
                                <MenuItem value="MW">Malawi</MenuItem>
                                <MenuItem value="MY">Malaysia</MenuItem>
                                <MenuItem value="MV">Maldives</MenuItem>
                                <MenuItem value="ML">Mali</MenuItem>
                                <MenuItem value="MT">Malta</MenuItem>
                                <MenuItem value="MH">Marshall Islands</MenuItem>
                                <MenuItem value="MQ">Martinique</MenuItem>
                                <MenuItem value="MR">Mauritania</MenuItem>
                                <MenuItem value="MU">Mauritius</MenuItem>
                                <MenuItem value="YT">Mayotte</MenuItem>
                                <MenuItem value="MX">Mexico</MenuItem>
                                <MenuItem value="FM">Micronesia, Federated States of</MenuItem>
                                <MenuItem value="MD">Moldova, Republic of</MenuItem>
                                <MenuItem value="MC">Monaco</MenuItem>
                                <MenuItem value="MN">Mongolia</MenuItem>
                                <MenuItem value="ME">Montenegro</MenuItem>
                                <MenuItem value="MS">Montserrat</MenuItem>
                                <MenuItem value="MA">Morocco</MenuItem>
                                <MenuItem value="MZ">Mozambique</MenuItem>
                                <MenuItem value="MM">Myanmar</MenuItem>
                                <MenuItem value="NA">Namibia</MenuItem>
                                <MenuItem value="NR">Nauru</MenuItem>
                                <MenuItem value="NP">Nepal</MenuItem>
                                <MenuItem value="NL">Netherlands</MenuItem>
                                <MenuItem value="NC">New Caledonia</MenuItem>
                                <MenuItem value="NZ">New Zealand</MenuItem>
                                <MenuItem value="NI">Nicaragua</MenuItem>
                                <MenuItem value="NE">Niger</MenuItem>
                                <MenuItem value="NG">Nigeria</MenuItem>
                                <MenuItem value="NU">Niue</MenuItem>
                                <MenuItem value="NF">Norfolk Island</MenuItem>
                                <MenuItem value="MP">Northern Mariana Islands</MenuItem>
                                <MenuItem value="NO">Norway</MenuItem>
                                <MenuItem value="OM">Oman</MenuItem>
                                <MenuItem value="PK">Pakistan</MenuItem>
                                <MenuItem value="PW">Palau</MenuItem>
                                <MenuItem value="PS">Palestinian Territory, Occupied</MenuItem>
                                <MenuItem value="PA">Panama</MenuItem>
                                <MenuItem value="PG">Papua New Guinea</MenuItem>
                                <MenuItem value="PY">Paraguay</MenuItem>
                                <MenuItem value="PE">Peru</MenuItem>
                                <MenuItem value="PH">Philippines</MenuItem>
                                <MenuItem value="PN">Pitcairn</MenuItem>
                                <MenuItem value="PL">Poland</MenuItem>
                                <MenuItem value="PT">Portugal</MenuItem>
                                <MenuItem value="PR">Puerto Rico</MenuItem>
                                <MenuItem value="QA">Qatar</MenuItem>
                                <MenuItem value="RE">Réunion</MenuItem>
                                <MenuItem value="RO">Romania</MenuItem>
                                <MenuItem value="RU">Russian Federation</MenuItem>
                                <MenuItem value="RW">Rwanda</MenuItem>
                                <MenuItem value="BL">Saint Barthélemy</MenuItem>
                                <MenuItem value="SH">Saint Helena, Ascension and Tristan da Cunha</MenuItem>
                                <MenuItem value="KN">Saint Kitts and Nevis</MenuItem>
                                <MenuItem value="LC">Saint Lucia</MenuItem>
                                <MenuItem value="MF">Saint Martin (French part)</MenuItem>
                                <MenuItem value="PM">Saint Pierre and Miquelon</MenuItem>
                                <MenuItem value="VC">Saint Vincent and the Grenadines</MenuItem>
                                <MenuItem value="WS">Samoa</MenuItem>
                                <MenuItem value="SM">San Marino</MenuItem>
                                <MenuItem value="ST">Sao Tome and Principe</MenuItem>
                                <MenuItem value="SA">Saudi Arabia</MenuItem>
                                <MenuItem value="SN">Senegal</MenuItem>
                                <MenuItem value="RS">Serbia</MenuItem>
                                <MenuItem value="SC">Seychelles</MenuItem>
                                <MenuItem value="SL">Sierra Leone</MenuItem>
                                <MenuItem value="SG">Singapore</MenuItem>
                                <MenuItem value="SX">Sint Maarten (Dutch part)</MenuItem>
                                <MenuItem value="SK">Slovakia</MenuItem>
                                <MenuItem value="SI">Slovenia</MenuItem>
                                <MenuItem value="SB">Solomon Islands</MenuItem>
                                <MenuItem value="SO">Somalia</MenuItem>
                                <MenuItem value="ZA">South Africa</MenuItem>
                                <MenuItem value="GS">South Georgia and the South Sandwich Islands</MenuItem>
                                <MenuItem value="SS">South Sudan</MenuItem>
                                <MenuItem value="ES">Spain</MenuItem>
                                <MenuItem value="LK">Sri Lanka</MenuItem>
                                <MenuItem value="SD">Sudan</MenuItem>
                                <MenuItem value="SR">Suriname</MenuItem>
                                <MenuItem value="SJ">Svalbard and Jan Mayen</MenuItem>
                                <MenuItem value="SZ">Swaziland</MenuItem>
                                <MenuItem value="SE">Sweden</MenuItem>
                                <MenuItem value="CH">Switzerland</MenuItem>
                                <MenuItem value="SY">Syrian Arab Republic</MenuItem>
                                <MenuItem value="TW">Taiwan, Province of China</MenuItem>
                                <MenuItem value="TJ">Tajikistan</MenuItem>
                                <MenuItem value="TZ">Tanzania, United Republic of</MenuItem>
                                <MenuItem value="TH">Thailand</MenuItem>
                                <MenuItem value="TL">Timor-Leste</MenuItem>
                                <MenuItem value="TG">Togo</MenuItem>
                                <MenuItem value="TK">Tokelau</MenuItem>
                                <MenuItem value="TO">Tonga</MenuItem>
                                <MenuItem value="TT">Trinidad and Tobago</MenuItem>
                                <MenuItem value="TN">Tunisia</MenuItem>
                                <MenuItem value="TR">Turkey</MenuItem>
                                <MenuItem value="TM">Turkmenistan</MenuItem>
                                <MenuItem value="TC">Turks and Caicos Islands</MenuItem>
                                <MenuItem value="TV">Tuvalu</MenuItem>
                                <MenuItem value="UG">Uganda</MenuItem>
                                <MenuItem value="UA">Ukraine</MenuItem>
                                <MenuItem value="AE">United Arab Emirates</MenuItem>
                                <MenuItem value="GB">United Kingdom</MenuItem>
                                <MenuItem value="US">United States</MenuItem>
                                <MenuItem value="UM">United States Minor Outlying Islands</MenuItem>
                                <MenuItem value="UY">Uruguay</MenuItem>
                                <MenuItem value="UZ">Uzbekistan</MenuItem>
                                <MenuItem value="VU">Vanuatu</MenuItem>
                                <MenuItem value="VE">Venezuela, Bolivarian Republic of</MenuItem>
                                <MenuItem value="VN">Viet Nam</MenuItem>
                                <MenuItem value="VG">Virgin Islands, British</MenuItem>
                                <MenuItem value="VI">Virgin Islands, U.S.</MenuItem>
                                <MenuItem value="WF">Wallis and Futuna</MenuItem>
                                <MenuItem value="EH">Western Sahara</MenuItem>
                                <MenuItem value="YE">Yemen</MenuItem>
                                <MenuItem value="ZM">Zambia</MenuItem>
                                <MenuItem value="ZW">Zimbabwe</MenuItem>
                            </TextField>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-xs-12 margin-auto" >
                    <div className="flex-middle space-bottom-15">
                        <div className="visiable-line">
                            <button className="button btn btn-theme-second" onClick={filterBtn}>Filter</button>
                        </div>
                        <a href="#" className="toggle-adv visiable-line btn button"onClick={() => {
                                    advanceflag? setAdvanceflag(false):setAdvanceflag(true);
                                }}>
                        <i className="fas fa-cog"></i> 
                        Advance	
                        </a>
                    </div>
                </div>
                {advanceflag?<div className="row" style={{width:'100%'}}>
                    <div className="col-lg-4 col-xs-12 margin-auto" >
                        <Typography id="track-inverted-range-slider" gutterBottom>
                                    Review Rating
                                </Typography>
                                <Slider
                                    // track="inverted"
                                    aria-labelledby="track-inverted-range-slider"
                                    valueLabelFormat={valueLabelFormat1}
                                    valueLabelDisplay="auto"
                                    step={20}
                                    value={filterReview}
                                    onChange={(event,value) =>{setFilterReview(value)}}
                                    marks={marks1}
                                />
                        
                    </div>
                    <div className="col-lg-4 col-xs-12 margin-auto" >
                        <Typography id="track-inverted-range-slider" gutterBottom>
                        Budget Range
                                </Typography>
                                <Slider
                                    // track="inverted"
                                    aria-labelledby="track-inverted-range-slider"
                                    valueLabelFormat={valueLabelFormat}
                                    getAriaValueText={valuetext}
                                    valueLabelDisplay="auto"
                                    value={filterRangeBudget}
                                    onChange={(event,value) =>{setFilterRangeBudget(value)}}
                                    marks={marks}
                                />
                        
                    </div>
                </div>
                    :<div/>
                }
            </FormGroup>
        </div>
    </section>
    <section style={{backgroundColor:'white'}}>
            <div className="container jobSecond">
            {selected?<div className="row">
                    <div className="results-filter-wrapper" style={{width:'100%'}}>
                    <h3 className="title">Your Selected</h3>
                    <div className="inner">
                        <ul className="results-filter">
                        {Object.keys(selected).map(key => 
                                (key !== 'review' && key !== 'budget')?
                            <li><a onClick={(e)=>{removeOneSelect(key);}}><span className="close-value">x</span>{selected[key]}</a></li>
                            :(
                            key === 'review'?<li><a onClick={(e)=>{removeOneSelect('review');}}><span className="close-value">x</span>Review: {filterReview[0] / 20} ~ {filterReview[1] / 20}</a></li>
                            :<li><a onClick={(e)=>{removeOneSelect('budget');}}><span className="close-value">x</span>Budget: {filterRangeBudget[0]* 100}$ ~ {filterRangeBudget[1]* 100}$</a></li>)
                        )}
                             {/* <li><a><span className="close-value">x</span>All</a></li> */}
                        </ul>
                        <a onClick={handleClearAll}>
                        <i className="fas fa-trash-alt"></i>
                        Clear all</a>
                        </div>
                    </div>
                </div>:<div></div>
                }
                <div className="row">
                    <div className="jobs-alert-ordering-wrapper" style={{width:'100%'}}>
                        <div className="results-count">
                            Showing {page*rowsPerPage + 1} – {allnurses.length >= (page + 1)*rowsPerPage ?  (page + 1)*rowsPerPage : allnurses.length} of {allnurses.length} results
                        </div>
                    <div className="jobs-ordering-wrapper" style={{display:'flex'}}>
                            <TextField
                                    id="outlined-select-currency"
                                    select
                                    placeholder="Category"
                                    className={classes.textField1}
                                    value={rowsPerPage}
                                    onChange={(e)=>{setRowsPerPage(e.target.value); setPage(0)}}
                                    margin="normal"
                                    variant="outlined"
                                >
                                    <MenuItem key='5 Per Pages' value={5}>
                                    5 Per Pages
                                    </MenuItem>
                                    <MenuItem key='10 Per Pages' value={10}>
                                    10 Per Pages
                                    </MenuItem>
                                </TextField>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="jobs-wrapper items-wrapper">
                    {allnurses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                return (
                                <div key={index}className="style-list-jobs">
                                    <article id="post-549" className="job-list map-item job-style-inner post-549 job_listing type-job_listing status-publish has-post-thumbnail hentry job_listing_type-internship job_listing_category-retail job_listing_location-new-york job_listing_tag-digital job_listing_tag-interviews job_listing_tag-jobs job_listing_tag-media" data-latitude="40.776629" data-longitude="-73.952531">
                                {/* <div className="featured-urgent-label">
                                <span className="featured label-no-icon">Featured</span>
                                    <span className="urgent">Urgent</span>
                                </div> */}
                                <div className="flex-middle-sm job-list-container">
                                    <div className="candidate-logo candidate-thumbnail">
                                        <a href="https://www.demoapus-wp1.com/workio/candidate/meg-cabot/">
                                            <div className="image-wrapper image-loaded">
                                                <img width="180" height="180" src={row.profilePhoto ===''?default_img:row.profilePhoto} className="attachment-workio-logo-size size-workio-logo-size unveil-image" alt=""  sizes="(max-width: 180px) 100vw, 180px"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="job-information">
                                        <div className="title-wrapper">
                                            <h2 className="job-title">
                                                <a href="#" rel="bookmark">{row.firstName + ' '+ row.lastName}</a>
                                            </h2>                
                                        </div>
                                        <div className="job-employer-info-wrapper">
                                            <h3 className="employer-title">
                                                <a href="#">
                                                {row.title}
                                                </a>
                                            </h3>
                                            <div className="job-salary">
                                                $<span className="price-text">{row.salary}</span> / month
                                            </div>    
                                            <div className="job-types">
                                                <div className="job-type with-title">
                                                    <a className="type-job" href="https://www.demoapus-wp1.com/workio/job-type/internship/" style={{color: '#63ace5'}}>
                                                        {row.summary}
                                                    </a>
                                                </div>
                                            </div>
                                    </div>            
                                    </div>
                                    {/* <div className="job-location with-icon">
                                        <i className="ti-location-pin"></i>
                                        <a href="#">
                                            {row.address}
                                        </a>
                                    </div>             */}
                                    <div className="deadline-time">Application ends: <strong>October 1, 2025</strong></div>
                                    <Link to="/messages" className="btn btn-apply btn-apply-job-internal-required">Chat Now<i className="next flaticon-right-arrow"></i></Link>
                                    {/* <a href="#" className="btn btn-apply btn-apply-job-internal-required">Apply Now<i className="next flaticon-right-arrow"></i></a> */}
                                    <Snackbar
                                         anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        open={addsnack}
                                        autoHideDuration={2000}
                                        onClose={handleAddsnackClose}
                                        ContentProps={{
                                        'aria-describedby': 'message-id',
                                        }}
                                        message={<span id="message-id">Please login firstly!</span>}
                                    />
                                    <div className="job-apply-internal-required-wrapper" style={{display:'none'}}>
                                        <div className="msg-inner">Please login with "Candidate" to apply</div>
                                    </div>
                                </div>
                            </article>  
                        </div>
                            )})
                }
                    </div>
                    {allnurses.length > rowsPerPage?
                <div className="jobs-pagination-wrapper main-pagination-wrapper" style={{margin:'auto'}}>
                        <ul className="pagination">
                            {page >= 1 ?<li><a className="prev page-numbers"onClick={() => {setPage(page - 1);}}><i className="fas fa-chevron-left"></i></a></li>:<></>}
                            {page >= 1 ?<li><a className="page-numbers"onClick={() => {setPage(page - 1);}}>{page}</a></li>:<></>}
                            <li><span className="page-numbers current">{page + 1}</span></li>
                            {(page + 1)* rowsPerPage <= allnurses.length ?<li><a className="page-numbers"onClick={() => {setPage(page + 1);}}>{page + 2}</a></li>:<></>}
                            {(page + 1)* rowsPerPage <= allnurses.length ?<li><a className="next page-numbers"onClick={() => {setPage(page + 1);}}><i className="fas fa-chevron-right"></i></a></li>:<></>}
                        </ul>
                    </div>:<></>}
                </div>
            </div>
    </section>
    <Footer/>
    </>
);
}
const mapStateToProps = (state) => ({
    nurses: state.user.nurses,
    allcategories:state.category.allcategories,
    user:state.auth.user,
    bids:state.bid.bids
})

export default connect(
    mapStateToProps,
    {...authDuck.actions, ...activityDuck.actions, ...userDuck.actions, ...categoryDuck.actions}
)(SearchNurse);
