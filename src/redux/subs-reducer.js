import { subsAPI } from '../api/api';

const GET_ALL_SUBSCRIPTIONS = 'subs-reducer/GET_ALL_SUBSCRIPTIONS';

let initialState = {
  subs: null
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

export default subsReducer;