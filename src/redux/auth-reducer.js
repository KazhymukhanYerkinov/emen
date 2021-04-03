import Cookie from 'js-cookie';
import { stopSubmit, reset } from 'redux-form';
import { authAPI } from '../api/api';

const LOGIN_SUCCESS = 'auth-reducer/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth-reducer/LOGIN_FAIL';

const LOAD_USER_SUCCESS = 'auth-reducer/LOAD_USER_SUCCESS';
const LOAD_USER_FAIL = 'auth-reducer/LOAD_USER_FAIL';

const SIGN_UP_SUCCESS = 'auth-reducer/SIGN_UP_SUCCESS';
const SIGN_UP_FAIL = 'auth-reducer/SIGN_UP_FAIL';

const AUTHENTICATED_SUCCESS = 'auth-reducer/AUTHENTICATED_SUCCESS';
const AUTHENTICATED_FAIL = 'auth-reducer/AUTHENTICATED_FAIL';

const SUCCESS_ACTIVATE_ACCOUNT = 'auth-reducer/SUCCESS_ACTIVATE_ACCOUNT';
const FAIL_ACTIVATE_ACCOUNT = 'auth-reducer/FAIL_ACTIVATE_ACCOUNT';







const LOGOUT = 'LOGOUT';


let initialState = {
    access: Cookie.get('access'),
    isAuth: false,
    user: {},

    fromRegisterPage: 0,
    isActivate: false,

    activateError: {
        showError: false,
        errorMessage: null,
        unfinishedExam: null,
    },

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
        case SIGN_UP_SUCCESS:
           
            return {
                ...state,
                isAuth: false,
                fromRegisterPage: action.fromRegisterPage,
            }

        // check auth state
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
        
        // get user state
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                user: payload,
            }
        case LOAD_USER_FAIL:
            return {
                ...state,
                user: null
            }

        // Activate state
        case SUCCESS_ACTIVATE_ACCOUNT:
            return {
                ...state,
                isActivate: true
            }
        case FAIL_ACTIVATE_ACCOUNT:
            let stateCopy = {...state};
            stateCopy.isActivate = false;

            let activateError = stateCopy.activateError;
            activateError.showError = true;
            activateError.errorMessage = action.errorMessage;

            return stateCopy

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


export const activateAccountThunk = (uid, token) => async (dispatch) => {
    try {
        await authAPI.activateAccount(uid, token);
        dispatch({ type: SUCCESS_ACTIVATE_ACCOUNT });
    } catch (error) {
        let errorMessage = 'Неверный токен или uid. Пожалуйста, зайдите в Gmail и нажмите ссылку еще раз.'  
        dispatch({ type: FAIL_ACTIVATE_ACCOUNT, errorMessage });
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
        let deedline = 36000;
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