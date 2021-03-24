import React from 'react';
import Cookie from 'js-cookie';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  loginThunk, signUpThunk, logoutThunk,
  setRedirectSuccessPage, emailResetConfirmThunk,
  passwordResetConfirmThunk,
} from './redux/auth-reducer';
import { initSuccessThunk } from './redux/app-reducer';
import {
  Content, Header, Footer,
  SignIn, SignUp, ForgotPassword,
  ConfirmPassword, Success, Subjects,
  DetailSubject, Activate, HistoryDetail
} from './components';

import './App.css';
import Test from './components/Test/Test';
import Preloader from './components/common/Preloader/Preloader';
import ScrollToUp from './hoc/ScrollToUp';



let BASE_URL = 'https://e-men.kz';

const App = (props) => {

  const [language, setLanguage] = React.useState('ru');

  React.useEffect(() => {
    props.initSuccessThunk();
  }, []);

  React.useEffect(() => {
    if (Cookie.get('lang')) {
      setLanguage(Cookie.get('lang'));
    }
  }, [language])

  const { isAuth, user, loginThunk,
    signUpThunk, fromRegisterPage, logoutThunk,
    initialized, setRedirectSuccessPage, emailResetConfirmThunk,
    passwordResetConfirmThunk, } = props;

  if (!initialized) {
    return <Preloader />
  }




  return (
    <div className="App">
      <ScrollToUp>
        <Header isAuth={isAuth} user={user} logoutThunk={logoutThunk} language={language} setLanguage={setLanguage} />

        <Route exact path='/'
          render={() => <Content isAuth={isAuth} language={language} />} />
        <Route exact path='/login'
          render={() => <SignIn isAuth={isAuth} loginThunk={loginThunk} />} />
        <Route exact path='/registration'
          render={() => <SignUp signUpThunk={signUpThunk} fromRegisterPage={fromRegisterPage} />} />
        <Route exact path='/forgotpassword'
          render={() => <ForgotPassword emailResetConfirmThunk={emailResetConfirmThunk} />} />
        <Route exact path='/password/reset/confirm/:uid/:token'
          render={() => <ConfirmPassword fromRegisterPage={fromRegisterPage} passwordResetConfirmThunk={passwordResetConfirmThunk} />} />
        <Route path='/showTheme/:subjectID'
          render={() => <DetailSubject BASE_URL={BASE_URL} />} />
        {fromRegisterPage !== 0 &&
          <Route exact path='/success'
            render={() => <Success fromRegisterPage={fromRegisterPage} setRedirectSuccessPage={setRedirectSuccessPage} />} />}
        <Route exact path='/activate/:uid/:token' component = { Activate }/>

        <Route exact path='/start_test/:examUID'
          render={() => <Test BASE_URL={BASE_URL} />} />

        <Route exact path='/subjects'
          render={() => <Subjects language={language} BASE_URL={BASE_URL} />} />

        <Route exact path = '/history' component = { HistoryDetail } />
          
        <Footer />
      </ScrollToUp>
    </div>
  );

}

let mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth,
  user: state.authPage.user,
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
