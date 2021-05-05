const SUCCESS_ERROR = 'error-reducer/SUCCESS_ERROR';
const FAIL_ERROR = 'error-reducer/FAIL_ERROR';


let initialState = {
  error_code: 0,
  error_data: null
  
}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_ERROR:
      return {
        ...state,
        error_code: action.error,
        error_data: action.error_data
      }
    case FAIL_ERROR:
      return {
        ...state,
        error_code: 0,
        error_data: null
      }
    default:
      return state;
  }
}

export const successError = (error, error_data) => ({ type: SUCCESS_ERROR, error, error_data });
export const failError = () => ({ type: FAIL_ERROR });

export default errorReducer;