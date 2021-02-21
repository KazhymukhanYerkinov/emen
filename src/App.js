import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginThunk, signUpThunk, logoutThunk, 
  setRedirectSuccessPage, emailResetConfirmThunk,
  passwordResetConfirmThunk, } from './redux/auth-reducer';
import { initSuccessThunk } from './redux/app-reducer';

import { Content, Header, Footer, 
  SignIn, SignUp, ForgotPassword, 
  ConfirmPassword, Success, Subjects,
  DetailSubject, Activate
} from './components';

import './App.css';
import Test from './components/Test/Test';





class App extends React.Component {
  componentDidMount() {
    this.props.initSuccessThunk();
  }


  
  render(){
    const { isAuth,user, loginThunk, 
      signUpThunk, fromRegisterPage, logoutThunk, 
      initialized, setRedirectSuccessPage, emailResetConfirmThunk,
      passwordResetConfirmThunk, } = this.props;
    
    if (!initialized) {
      return (
        <div>
          <h1> Здесь должна быть загрузка :) </h1>
        </div>
      )
    }
    
    return (
      <div className="App">
          <Header isAuth = { isAuth } user = { user } logoutThunk = { logoutThunk } />

          <Route exact path = '/'
              render = {() => <Content isAuth = { isAuth } />} />
          <Route exact path = '/login' 
              render = {() => <SignIn isAuth = { isAuth } loginThunk = { loginThunk }/> }/>
          <Route exact path = '/registration' 
              render = {() => <SignUp signUpThunk = { signUpThunk } fromRegisterPage = { fromRegisterPage }/> } />
          <Route exact path = '/forgotpassword'
              render = {() => <ForgotPassword emailResetConfirmThunk = { emailResetConfirmThunk } /> }/>
          <Route exact path = '/password/reset/confirm/:uid/:token'
              render = {() => <ConfirmPassword fromRegisterPage = { fromRegisterPage } passwordResetConfirmThunk = { passwordResetConfirmThunk }/> } />
          <Route path = '/detail/:testtID'
              render = {() => <DetailSubject /> }/>
          {fromRegisterPage !== 0 && 
          <Route exact path = '/success'
              render = {() => <Success fromRegisterPage = { fromRegisterPage } setRedirectSuccessPage = { setRedirectSuccessPage }/>} />}
          <Route exact path = '/activate/:uid/:token' component = { Activate }/>

          <Route exact path = '/test' component = { Test } />

          <Route exact path = '/subjects' component = { Subjects } />

          <Footer />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth,
  user:  state.authPage.user,
  fromRegisterPage: state.authPage.fromRegisterPage,
  initialized: state.appPage.initialized,
})


export default connect(mapStateToProps, 
  { 
    loginThunk, 
    signUpThunk, 
    logoutThunk, 
    initSuccessThunk,
    setRedirectSuccessPage,
    emailResetConfirmThunk,
    passwordResetConfirmThunk,
    
  })(App);
