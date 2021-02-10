import { checkAuthThunk, loadUserThunk } from './auth-reducer';

const INITALIZED_SUCCESS = 'INITALIZED_SUCCESS';

let initialState = {
    initialized: false,
}



const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initSuccess = () => ({ type: INITALIZED_SUCCESS });

export const initSuccessThunk = () => (dispatch) => {
    let promise1 = dispatch(checkAuthThunk());
    let promise2 = dispatch(loadUserThunk());

    Promise.all([ promise1, promise2 ]).then(() => {
        dispatch(initSuccess())
    });
}

export default appReducer;