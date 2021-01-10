import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/redux-store';

import App from './App';



ReactDOM.render(
  <Provider store = { store }>
    <HashRouter basename = {process.env.PUBLIC_URL}>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

