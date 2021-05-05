import { subsAPI } from '../api/api';
import { successError } from './error-reducer';

const GET_ALL_SUBSCRIPTIONS = 'subs-reducer/GET_ALL_SUBSCRIPTIONS';

let initialState = {
  subs: null,
}



const subsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SUBSCRIPTIONS:
      return {
        ...state,
        subs: action.subs
      }    
    
    default:
      return state;
  }
}


const setSubscription = (subs) => ({ type: GET_ALL_SUBSCRIPTIONS, subs });


export const getSubsThunk = () => async (dispatch) => {
  try {
    const data = await subsAPI.getSubs();
    dispatch(setSubscription(data))
  } catch (error) {
    console.log(error)
  }
}

export const postSubs = (uid, not_care, subscription_time) => async (dispatch) => {
  try {
    await subsAPI.postSubs(uid, not_care, subscription_time);  
  } catch (error) {
    if (error.response.data.status_code === 7) {
      dispatch(successError(7, null));

    }
    else if (error.response.data.status_code === 3) {
      dispatch(successError(3, null));

    }
  }
}

export default subsReducer;