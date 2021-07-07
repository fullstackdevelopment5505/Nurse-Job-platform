import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import swal from 'sweetalert';
import { Alert } from "react-bootstrap";
import clsx from 'clsx';
import { useHistory } from "react-router-dom";

import * as actions from '../../../../../app/actions';
import * as authDuck from '../../../../../app/store/ducks/auth.duck';
import * as activityDuck from '../../../../../app/store/ducks/activity.duck';
import * as jobDuck from '../../../../../app/store/ducks/job.duck';
import * as categoryDuck from '../../../../../app/store/ducks/category.duck';

import {storage} from './../../../../../app/firebase';
import default_img from './../../../../assets/default_profile.png';
import { Link } from "react-router-dom";

function CurrentEdit(props) {
  const [status, setStatus] = useState('');
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [min, setMin] = useState(10);
  const [max, setMax] = useState(100);
  const [category, setCategory] = useState('');
  const [summary, setSummary] = useState('');
  const [categoryarr, setCategoryarr]=useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingButtonStyle, setLoadingButtonStyle] = useState({
    paddingRight: "2.5rem"
  });
  const history = useHistory();
   const enableLoading = () => {
    setLoading(true);
    setLoadingButtonStyle({ paddingRight: "3.5rem" });
  };

  const disableLoading = () => {
    setLoading(false);
    setLoadingButtonStyle({ paddingRight: "2.5rem" });
  };
  useEffect(() => {
    // console.log('props.cursur')
    // console.log(props.curjob)
    setId(props.curjob._id || '');
    setTitle(props.curjob.title || '')
    setMin(props.curjob.minBudget || 1);
    setMax(props.curjob.maxBudget || 10);
    setSummary(props.curjob.summary || '');
    setCategoryarr(props.allcategories);
    if(props.curjob.category)
      setCategory(props.curjob.category || '');
    else
      setCategory(props.allcategories[0]._id);
  }, [props])


  // const cancel = () => {
    
    // setPassword(getPassword(props.user.password));
  // }

  const save = () => {
    console.log('1111')
     if(title === '' || summary === ''){
      setStatus('You have to input all the correctly info')
      return;
    }
    console.log(title)

    var tempData = {
      title: title,
      category:category,
      minBudget:min,
      maxBudget:max,
      summary:summary,
      client:props.user._id
    };
    if(id != '')
      Object.assign(tempData, {'_id':id});
      handleSave(tempData)
  }
  const handleSave=(result)=>{

     enableLoading();
    setTimeout(() => {
       if(id === ''){
      actions.addJob(result).then(res=>{
        disableLoading();
        let {data} = res;
        if(!data.success){
          setStatus(data.errMessage);
          return;
        }else{
          setStatus('');
          console.log('succesfull')
          props.allJobs(data.jobs);
          history.push("/myprofile/current-working");
          return;
        }
      }).catch(() => {
        //console.log('===  data2  == ')
        disableLoading();
        setStatus(
          'Error!!! you have to check your Database or Connection'
        );
      });
    }else{
      actions.updateJob(result).then(res=>{
        disableLoading();
        let {data} = res;
        if(!data.success){
          setStatus(data.errMessage);
          return;
        }else{
          console.log('succesfull')
          props.allJobs(data.jobs);
          history.push("/myprofile/current-working");
          return;
        }
      }).catch(() => {
        //console.log('===  data2  == ')
        disableLoading();
        setStatus(
          'Error!!! you have to check your Database or Connection'
        );
      });
    }
    }, 1000);

   
  }

  return (
    <div className="row" style={{backgroundColor: "white", padding: "40px 20px 40px 20px"}}>
      <div className="col-md-2">
      </div>
      <div className="col-md-8">
        <div className="col-md-12">
          <span className="col-md-6 cold-sm-12" style={{fontSize: "1.275rem", fontWeight: 600 }}>{id===''?'New':'Edit'} Job ( Job Details )</span>
          <div className="col-md-6 col-sm-12 pull-right">
            <Link to="/myprofile/current-working"><button className="btn btn-secondary pull-right">Cancel</button></Link>
            <button className="" style={{marginRight: 10, }} onClick={save}className={`btn btn-primary pull-right ${clsx(
                      {
                        "kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light": loading
                      }
                    )}`}>
                      {id===''?'Add':'Update'}
              </button>
          </div>
        </div>
        <div className="col-md-12" style={{marginTop: 60}}>
        {status !=='' ?<div className="col-md-12">
              <Alert variant='danger'>
                  {status}
              </Alert>
          </div>:<div></div>}
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label">Job Title</label>
            <div className="col-lg-9 col-xl-6">
              <input className="form-control" type="text" value={title} onChange={ (e) => setTitle(e.target.value) }/>
            </div>
          </div>
          <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label">Category</label>
              <div className="col-lg-9 col-xl-6">
                {/* <select className="form-control" id="exampleSelectl" value={category} onChange={ (e) => setCategory(e.target.value) } multiple={true}> */}
                <select className="form-control" id="exampleSelectl" value={category} onChange={ (e) => setCategory(e.target.value) }>
                  {categoryarr.map((row,index) => (
                    <option key={row._id} value={row._id}>{row.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label">Job Summary</label>
              <div className="col-lg-9 col-xl-6">
                <textarea className="form-control"  rows="4"value={summary} onChange={ (e) => setSummary(e.target.value) }></textarea>
              </div>
            </div>
            <div className="form-group  row">
                <label className="col-xl-3 col-lg-3 col-form-label">Min Budget</label>
                <div className="col-lg-9 col-xl-6">
                  <div className="input-group">
                    <input type="number" className="form-control" min="1" value={min} onChange={ (e) => setMin(e.target.value) }/>
                    <div className="input-group-append"><span className="input-group-text">$</span></div>
                  </div>
                </div>
            </div>
            <div className="form-group  row">
                <label className="col-xl-3 col-lg-3 col-form-label">Max Budget</label>
                <div className="col-lg-9 col-xl-6">
                  <div className="input-group">
                    <input type="number" className="form-control" min="10" value={max} onChange={ (e) => setMax(e.target.value) }/>
                    <div className="input-group-append"><span className="input-group-text">$</span></div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  allcategories: state.category.allcategories,
  user:state.auth.user,
  curjob: state.job.curjob,
})

export default connect(
    mapStateToProps,
    {...authDuck.actions, ...activityDuck.actions, ...jobDuck.actions, ...categoryDuck.actions}
)(CurrentEdit);
