import { checkAuthThunk, loadUserThunk } from './auth-reducer';

const INITALIZED_SUCCESS = 'app-reducer/INITALIZED_SUCCESS';
const SET_LANGUAGE = 'app-reducer/SET_LANGUAGE';

let initialState = {
    initialized: false,
    language: 'ru',
    BASE_URL: 'http://127.0.0.1:8000',
}



const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.language
            }
        default:
            return state;
    }
}

export const setLanguage = (language) => ({ type: SET_LANGUAGE, language });
export const initSuccess = () => ({ type: INITALIZED_SUCCESS });

export const initSuccessThunk = () => (dispatch) => {
    let promise1 = dispatch(checkAuthThunk());
    let promise2 = dispatch(loadUserThunk());

    Promise.all([ promise1, promise2 ]).then(() => {
        dispatch(initSuccess())
    });
}

export default appReducer;