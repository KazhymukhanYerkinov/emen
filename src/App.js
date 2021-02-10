import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginThunk, signUpThunk, logoutThunk, setRedirectSuccessPage } from './redux/auth-reducer';
import { initSuccessThunk } from './redux/app-reducer';
import { Content, 
  Header, 
  Footer, 
  SignIn, 
  SignUp, 
  ForgotPassword, 
  VerificationCode, 
  ConfirmPassword, 
  Success,Subjects 
} from './components';

import './App.css';




class App extends React.Component {
  componentDidMount() {
    this.props.initSuccessThunk();
  }


  
  render(){
    const { isAuth,user, loginThunk, 
      signUpThunk, fromRegisterPage, logoutThunk, 
      initialized, setRedirectSuccessPage } = this.props;
    
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
          <Route exact path = '/' component = { Content } />
          <Route exact path = '/login' 
              render = {() => <SignIn isAuth = { isAuth } loginThunk = { loginThunk }/> }/>

          <Route exact path = '/registration' 
              render = {() => <SignUp signUpThunk = { signUpThunk } fromRegisterPage = { fromRegisterPage }/> } />

          <Route exact path = '/forgotpassword' component = { ForgotPassword } />
          <Route exact path = '/verificode' component = {VerificationCode } />
          <Route exact path = '/confirmpassword' component = { ConfirmPassword } />

          {fromRegisterPage !== 0 && <Route exact path = '/success'
              render = {() => <Success fromRegisterPage = { fromRegisterPage } setRedirectSuccessPage = { setRedirectSuccessPage }/>} />}

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
    
  })(App);
