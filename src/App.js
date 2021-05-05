import React from 'react';
import Cookie from 'js-cookie';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  loginThunk, 
  signUpThunk, 
  logoutThunk,
  setRedirectSuccessPage, 
  emailResetConfirmThunk,
  passwordResetConfirmThunk,
} from './redux/auth-reducer';

import { 
  initSuccessThunk, 
  setLanguage 
} from './redux/app-reducer';

import {
  Content, 
  HeaderContainer, 
  Footer,
  SignIn, 
  SignUp, 
  ForgotPassword,
  ConfirmPassword, 
  Success, 
  Subjects,
  DetailSubject, 
  Activate, 
  HistoryDetailContainer,
  HistoryContainer,
  ProfileContainer,
  SubscriptionContainer,
  NotFound,
  TestContainer,
} from './components';

// helper components
import Preloader from './components/common/Preloader/Preloader';
import ScrollToUp from './hoc/ScrollToUp';

import './App.css';





class App extends React.Component {

  // The first check
  componentDidMount() {
    this.props.initSuccessThunk();
    
    if (Cookie.get('lang')) {
      this.props.setLanguage(Cookie.get('lang'));
    }
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div>
        <ScrollToUp>

          <HeaderContainer
            isAuth = { this.props.isAuth }
            user = { this.props.user }
            language = { this.props.language }
            setLanguage = { this.props.setLanguage }
            logoutThunk = { this.props.logoutThunk }
            BASE_URL = { this.props.BASE_URL }
          />
          <Switch>
            <Route 
              exact path = '/' 
              render = {() => (
                <Content
                  isAuth = { this.props.isAuth }
                  language = { this.props.language }
                />
                )} 
            />

            <Route 
              exact path = '/login'
              render = {() => (
                <SignIn
                  isAuth = { this.props.isAuth } 
                  loginThunk = { this.props.loginThunk }
                />
              )}
            />

            <Route
              exact path = '/registration'
              render = {() => (
                <SignUp
                  fromRegisterPage = { this.props.fromRegisterPage }
                  signUpThunk = { this.props.signUpThunk }
                />
              )}
            />

            <Route
              exact path = '/forgotpassword'
              render = {() => (
                <ForgotPassword
                  emailResetConfirmThunk={ this.props.emailResetConfirmThunk }
                />
              )}
            />

            <Route
              exact path = '/password/reset/confirm/:uid/:token' 
              render = {() => (
                <ConfirmPassword 
                  fromRegisterPage={ this.props.fromRegisterPage }
                  passwordResetConfirmThunk={ this.props.passwordResetConfirmThunk }
                />
              )}
            />

            {this.props.fromRegisterPage !== 0 &&
            <Route
              exact path = '/success'
              render = {() => (
                <Success
                  fromRegisterPage={ this.props.fromRegisterPage } 
                  setRedirectSuccessPage={ this.props.setRedirectSuccessPage } 
                />
              )} 
            />}

            <Route 
              exact path='/activate/:uid/:token' 
              component = { Activate }
            />

            <Route 
              path = '/showTheme/:subjectID'
              render = {() => (
                <DetailSubject
                  BASE_URL = { this.props.BASE_URL }
                />
              )}
            />

            <Route
              exact path = '/start_test/:examUID'
              render = {() => (
                <TestContainer
                  BASE_URL = { this.props.BASE_URL } 
                />
              )}
            />

            <Route
              exact path = '/subjects'
              render = {() => (
                <Subjects
                  language={ this.props.language } 
                  BASE_URL={ this.props.BASE_URL }
                />
              )}
            />

            <Route
              exact path = '/history'
              render = {() => (
                <HistoryContainer 
                  BASE_URL = { this.props.BASE_URL }
                />
              )}
            />

            <Route 
              exact path = '/history/:historyUID' 
              render = {() => (
                <HistoryDetailContainer 
                  BASE_URL = { this.props.BASE_URL }
                /> 
              )} 
            />

            <Route
              path = '/profile'
              render = {() => (
                <ProfileContainer 
                  BASE_URL = { this.props.BASE_URL }
                />
              )}
            />

            <Route
              exact path = '/subscription'
              component = { SubscriptionContainer } 
            />

            <Route component = { NotFound } />
            
          </Switch>
          <Footer />
        </ScrollToUp>
      </div>
    )
  }
}


let mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth,
  user: state.authPage.user,
  fromRegisterPage: state.authPage.fromRegisterPage,

  initialized: state.appPage.initialized,
  language: state.appPage.language,
  BASE_URL: state.appPage.BASE_URL,
})

export default connect(mapStateToProps, {
  loginThunk,
  signUpThunk,
  logoutThunk,
  initSuccessThunk,

  setLanguage,
  setRedirectSuccessPage,
  emailResetConfirmThunk,
  passwordResetConfirmThunk,
})(App);
