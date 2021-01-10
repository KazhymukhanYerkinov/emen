import { applyMiddleware, createStore, combineReducers } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducer = combineReducers({
    form: formReducer,
});

let store = createStore(reducer, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;