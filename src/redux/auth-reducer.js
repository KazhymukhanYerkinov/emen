import Cookie from 'js-cookie';
import * as axios from 'axios';
import { stopSubmit, reset } from 'redux-form';
import { authAPI } from '../api/api';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';

const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAIL = 'LOAD_USER_FAIL';

const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAIL = 'SIGN_UP_FAIL';

const AUTHENTICATED_SUCCESS = 'AUTHENTICATED_SUCCESS';
const AUTHENTICATED_FAIL = 'AUTHENTICATED_FAIL';

const GOOGLE_AUTH_SUCCESS = 'GOOGLE_AUTH_SUCCESS';
const GOOGLE_AUTH_FAIL = 'GOOGLE_AUTH_FAIL';


const LOGOUT = 'LOGOUT';


let initialState = {
    access: Cookie.get('access'),
    isAuth: false,
    user: {},

    fromRegisterPage: 0,

}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
        case GOOGLE_AUTH_SUCCESS:
            return {
                ...state,
                isAuth: true, 
                access: payload.access 
            }
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                user: payload,
            }
        case SIGN_UP_SUCCESS:
           
            return {
                ...state,
                isAuth: false,
                fromRegisterPage: action.fromRegisterPage,
            }
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuth: true
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuth: false
            }
        
        case LOAD_USER_FAIL:
            return {
                ...state,
                user: null
            }
        case LOGOUT:
        case SIGN_UP_FAIL:
        case LOGIN_FAIL:
            Cookie.remove('access');
            return {
                ...state,
                access: null,
                isAuth: false,
                user: null
            }
        default:
            return state;

    }
}

export const setRedirectSuccessPage = (fromRegisterPage) => {
    return { type: SIGN_UP_SUCCESS, fromRegisterPage }
}


export const checkAuthThunk = () => async (dispatch) => {
    if (Cookie.get('access')) {
        dispatch({ type: AUTHENTICATED_SUCCESS });
    }
    else {
        dispatch({ type: AUTHENTICATED_FAIL });
    }
}

export const googleAuthenticate = (state, code) => async dispatch => {
    if (state && code && !Cookie.get('access')) {


        console.log(state, code, Cookie.get('access'));
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        const details = {
            'state': state,
            'code': code
        };



        

        const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');
       

        try {
            const data = await axios.post(`https://e-men.kz/api/v1/auth/o/google-oauth2/?${formBody}`, config);
            
            Cookie.set('access', data.access);
            dispatch({ type: GOOGLE_AUTH_SUCCESS, payload: data });
            
        } catch(err) {
            console.log(err);
        }
    }
}

export const loadUserThunk = () => async (dispatch) => {
    if (Cookie.get('access')) {
        try {
            let data = await authAPI.loadUser();
            console.log(data);
            dispatch({ type: LOAD_USER_SUCCESS, payload: data });
            
        } catch (err) {
            dispatch({ type: LOAD_USER_FAIL })
        }
    }
    else {
        dispatch({ type: LOAD_USER_FAIL })
    }
}

export const loginThunk = (email, password, remember_me) => async (dispatch) => {
    try {
        let data = await authAPI.login(email, password);
        let deedline = remember_me ? 7:1;
        Cookie.set('access', data.access, { expires: deedline });
        dispatch({ type: LOGIN_SUCCESS, payload: data });
        dispatch(loadUserThunk());

    } catch(err) {
        dispatch({ type: LOGIN_FAIL });
        dispatch(stopSubmit('signin', { _error: 'Введен неправильный email или пароль, попробуйте еще раз' }))
    }
} 

export const emailResetConfirmThunk = (email) => async (dispatch) => {
    try {
        await authAPI.resetEmail(email);
        dispatch(reset('forgot'));
        dispatch(stopSubmit('forgot', {_error: 'На вашу электронную почту отправлено ссылка. Вы можете изменить свой пароль, войдя в систему по этой ссылке.'}));
    } catch (err) {
        dispatch(stopSubmit('forgot', {'email': 'Введен неправильный email, попробуйте еще раз'}))
    }
}

export const passwordResetConfirmThunk = (uid, token, new_password, re_new_password) => async (dispatch) => {
    if ( new_password === re_new_password ) {
        await authAPI.resetPassword(uid, token, new_password, re_new_password);
        dispatch(setRedirectSuccessPage(-1));
    }
    else {
        dispatch(stopSubmit('confirm', {'password2': 'Пароли не совпадают'}))
    }
}

export const signUpThunk = (email, first_name, last_name, password, re_password) => async (dispatch) => {
    if (password === re_password) {
        try {
            await authAPI.signup(email, first_name, last_name, password, re_password);
            dispatch(setRedirectSuccessPage(1));
        }
        catch(err) {
            dispatch({ type: SIGN_UP_FAIL });
            dispatch(stopSubmit('signup', { _error: 'Такой адрес электронной почты уже существует. Пожалуйста, введите другой адрес электронной почты.' }))
        }
    }
    else {
        dispatch(stopSubmit('signup', { 'password2': 'Пароли не совпадают' }));
    }
}

export const logoutThunk = () => (dispatch) => {
    dispatch({ type: LOGOUT });
}


export default authReducer;