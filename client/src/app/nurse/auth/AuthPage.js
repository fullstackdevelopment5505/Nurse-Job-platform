import React, { useState } from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { useHistory , Link} from "react-router-dom";

import { injectIntl } from "react-intl";
import clsx from "clsx";
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContentWrapper from './../../pages/home/MySnackBar';
import {
    TextField,
  } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import {
//     fade,
    withStyles,
    makeStyles,
//     createMuiTheme
  } from "@material-ui/core/styles";
// import { ThemeProvider } from "@material-ui/styles";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import Favorite from '@material-ui/icons/Favorite';
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import './AuthPage.scss';
import Header from "../layout/Header";
import BradCrumb from '../layout/BreadCrumb';
import Footer from "../layout/Footer";
import * as actions from '../../actions';
import * as authDuck from "../../store/ducks/auth.duck";
import * as userDuck from "../../store/ducks/user.duck";
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

 function AuthPage(props){
  // const { intl } = props;
  const history = useHistory();
  const [addsnack, setAddsnack] = React.useState(false);
  const [snackcontent, setSnackcontent] = React.useState("Added Succesfully!");
  const [forgetflag,setForgetflag] = React.useState(false);
const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
  const [loading, setLoading] = useState(false);
  const [loadingButtonStyle, setLoadingButtonStyle] = useState({
    paddingRight: "2.5rem"
  });
  const enableLoading = () => {
    setLoading(true);
    setLoadingButtonStyle({ paddingRight: "3.5rem" });
  };
  function handleAddsnackClose() {
    setAddsnack(false);

  }
  function handleAddsnackClick(){
    setAddsnack(true)
  }

  const disableLoading = () => {
    setLoading(false);
    setLoadingButtonStyle({ paddingRight: "2.5rem" });
  };
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
const useStyles = makeStyles(theme => ({
      container: {
        display: "flex",
        flexWrap: "wrap"
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
    const classes = useStyles();
    return (
      <>
        <Header/>
        <BradCrumb title="Login" base="Home"/>
        <section style={{backgroundColor:'white'}} className="authPage">
          <div className="container">
            <div className="row">
              {!forgetflag
              ?<div className="col-md-6 mx-auto">
                    <h3 className="title">Sign In</h3>
                   
                    <div className="col-md-12">
                    <Formik
                      initialValues={{
                        email: "",
                        password: ""
                      }}
                  validate={values => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = 'You have to input all the fields correctly'
                    }
                    if (!values.password) {
                      errors.password = 'You have to input all the fields correctly'
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setStatus, setSubmitting }) => {
                    //console.log('===  data 1 == ')
                    enableLoading();
                    setTimeout(() => {
                      actions.userlogin(values)
                        .then(res => {
                          disableLoading();
                          let {data} = res;
                          //console.log('===  data  == ')
                          //console.log(res)
                          if(!data.success) {
                            setSubmitting(false)
                            setStatus(
                              data.errMessage
                            );
                            return;
                          }
                          else{
                            setStatus('')
                            setSnackcontent('Login In Succesfully')
                            setSubmitting(false)
                            handleAddsnackClick()
                            props.userlogin(data);
                            // history.push("/home");
                            if(props.role === 2)  
                              history.push("/jobs");
                            else
                              history.push('/myprofile/overview')
                          }
                        })
                        .catch(() => {
                          //console.log('===  data2  == ')
                          disableLoading();
                          setSubmitting(false);
                          setStatus(
                            'Error!!! you have to check your Database or Connection'
                          );
                        });
                    }, 1000);
                  }}
                >
                  {({
                    values,
                    status,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                  }) => (
                      <form
                        noValidate={true}
                        autoComplete="off"
                        className="kt-form"
                        onSubmit={handleSubmit}
                      >
                         {/* {status !== '' ?<div className="sign-in-demo-notice">
                          {status}
                        </div>:<div></div>} */}
                        {status ? (
                              <div role="alert" className="alert alert-danger">
                                <div className="alert-text">{status}</div>
                              </div>
                            ) : (
                              <div></div>
                            )}
                        <TextField
                            id="standard-bare"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            placeholder="Email"
                            inputProps={{ "aria-label": "bare" }}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            helperText={touched.email && errors.email}
                            error={Boolean(touched.email && errors.email)}
                        />
                        <TextField
                            id="standard-bare"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            type="password"
                            placeholder="Password"
                            inputProps={{ "aria-label": "bare" }}
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            helperText={touched.password && errors.password}
                            error={Boolean(touched.password && errors.password)}
                        />
                        <div className="row">
                          <div className="col-md-6">
                              <FormControlLabel
                              control={
                                <GreenCheckbox
                                  checked={state.checkedB}
                                  onChange={handleChange('checkedB')}
                                  value="checkedB"
                                  color="primary"
                                />
                              }
                              label="Keep me signed in"
                            />
                          </div>
                          <div className="col-md-6" style={{textAlign:'right',margin:'10px 0px'}}>
                              <a className="back-link" title="Forgot Password" onClick={() => {
                                    setForgetflag(true);
                                  }}>Lost Your Password?</a>
                          </div>
                        </div>
                        <div className="row login-form-submit">
                          <input type="submit" className={`btn btn-theme-second btn-block ${clsx(
                            {
                              "kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light": loading
                            }
                          )}`}
                          style={loadingButtonStyle} name="submit" value="Sign In"/>
                        </div>
                        <div className="row">
                          <div className="create-account text-center" style={{width:'100%'}}>
                              Don’t Have an Account? <Link to="/register" className="create">Create</Link>
                          </div>
                        </div>
                      </form> )}
                      </Formik>
                    </div>
                </div>
              :<div className="col-md-6 reset-password mx-auto">
                    <div className="top-info-user text-center">
                      <h3 className="title">Reset Password</h3>
                      <div className="des">Please Enter Email</div>
                    </div>
                    <FormGroup row>
                        <TextField
                            id="standard-bare"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            placeholder="Email"
                            inputProps={{ "aria-label": "bare" }}
                        />
                        <div className="row login-form-submit" style={{marginTop:'6px'}}>
                          <input type="submit" className="btn btn-theme-second btn-block" name="submit" value="Get New Password"/>
                        </div>
                        <div className="row">
                          <div className="create-account text-center" style={{width:'100%'}}>
                             <a className="back-link" onClick={() => {
                                    setForgetflag(false);
                                  }}>Back To Login</a>
                          </div>
                        </div>
                    </FormGroup>
              </div>
              }
            </div>
          </div>
          </section>
          <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={addsnack}
          autoHideDuration={6000}
          onClose={handleAddsnackClose}
        >
          <MySnackbarContentWrapper
            onClose={handleAddsnackClose}
            variant={"success"}
            message={snackcontent}
          />
        </Snackbar>
        <Footer/>
      </>
    );
}
const mapStateToProps = (state) => ({
  role:state.auth.role
})
export default injectIntl(
  connect(
    mapStateToProps,
    {...authDuck.actions, ...userDuck.actions}
    // auth.actions
  )(AuthPage)
);
