import { Route } from 'react-router-dom';
import './App.css';
import { Content, Header, Footer, SignIn, SignUp, ForgotPassword, VerificationCode, ConfirmPassword, Success,Subjects } from './components';

function App() {
  return (
    <div className="App">
        <Header />
        <Route exact path = '/' component = { Content } />
        <Route exact path = '/login' component = { SignIn } />
        <Route exact path = '/registration' component = { SignUp } />
        <Route exact path = '/forgotpassword' component = { ForgotPassword } />
        <Route exact path = '/verificode' component = {VerificationCode } />
        <Route exact path = '/confirmpassword' component = { ConfirmPassword } />
        <Route exact path = '/success' component = { Success } />
        <Route exact path = '/subjects' component = { Subjects } />

        <Footer />
    </div>
  );
}

export default App;
