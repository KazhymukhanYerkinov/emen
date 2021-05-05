import { applyMiddleware, createStore, combineReducers } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import subjectReducer from './subject-reducer';
import testReducer from './startTest-reducer';
import historyReducer from './history-reducer';
import subsReducer from './subs-reducer';
import proflieReducer from './profile-reducer';
import errorReducer from './error-reducer';


let reducer = combineReducers({
    form: formReducer,
    appPage: appReducer,
    authPage: authReducer,
    subjectPage: subjectReducer,
    testPage: testReducer,
    historyPage: historyReducer,
    subsPage: subsReducer,
    profilePage: proflieReducer,
    errorPage: errorReducer,
    
      
});

let store = createStore(reducer, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;