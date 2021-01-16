import { Route } from 'react-router-dom';
import './App.css';
import { Content, Header, Footer, SignIn, SignUp, ForgotPassword } from './components';

function App() {
  return (
    <div className="App">
        <Header />
        <Route exact path = '/' component = { Content } />
        <Route exact path = '/login' component = { SignIn } />
        <Route exact path = '/registration' component = { SignUp } />
        <Route exact path = '/forgotpassword' component = { ForgotPassword } />
        <Footer />
    </div>
  );
}

export default App;
