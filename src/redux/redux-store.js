import { applyMiddleware, createStore, combineReducers } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import subjectReducer from './subject-reducer';


let reducer = combineReducers({
    form: formReducer,
    appPage: appReducer,
    authPage: authReducer,
    subjectPage: subjectReducer,
    
});

let store = createStore(reducer, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;