import Cookie from 'js-cookie';
import { authAPI } from '../api/api';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';

const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAIL = 'LOAD_USER_FAIL';

const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAIL = 'SIGN_UP_FAIL';

const AUTHENTICATED_SUCCESS = 'AUTHENTICATED_SUCCESS';
const AUTHENTICATED_FAIL = 'AUTHENTICATED_FAIL';

const LOGOUT = 'LOGOUT';


let initialState = {
    access: Cookie.get('access'),
    isAuth: false,
    user: {},

    fromRegisterPage: false,
    fromUpdatePasswordPage: false,
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
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
                fromRegisterPage: true,
                fromUpdatePasswordPage: false,
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

export const checkAuthThunk = () => async (dispatch) => {
    if (Cookie.get('access')) {
        dispatch({ type: AUTHENTICATED_SUCCESS });
    }
    else {
        dispatch({ type: AUTHENTICATED_FAIL });
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
        console.log(email, password, remember_me);
        let data = await authAPI.login(email, password);
        console.log(data);
        let deedline = remember_me ? 100:1;
        Cookie.set('access', data.access, { expires: deedline });
        dispatch({ type: LOGIN_SUCCESS, payload: data });
        dispatch(loadUserThunk());

    } catch(err) {
        dispatch({ type: LOGIN_FAIL });
        console.log(err);
    }
} 

export const signUpThunk = (email, first_name, last_name, password, re_password) => async (dispatch) => {
    if (password === re_password) {
        try {
            console.log(email, first_name, last_name, password, re_password)
            let data = await authAPI.signup(email, first_name, last_name, password, re_password);
            dispatch({ type: SIGN_UP_SUCCESS })
        }
        catch(err) {
            console.log('error')
        }
    }
    else {
        console.log('Password error')
    }
}

export const logoutThunk = () => (dispatch) => {
    dispatch({ type: LOGOUT });
}


export default authReducer;