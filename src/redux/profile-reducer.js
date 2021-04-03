import { profileAPI } from "../api/api";

const GET_PROFILE_DATA = 'profile-reducer/GET_PROFILE_DATA';
const GET_ALL_CITIES = 'profile-reducer/GET_ALL_CITIES';


let initialState = {
  user: null,
  cities: [],
}

const proflieReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_PROFILE_DATA:
      return {
        ...state,
        user: action.user
      }

    case GET_ALL_CITIES:
      return {
        ...state,
        cities: action.cities
      }
    
    default:
      return state
  }
}

export const getProfile = () => async (dispatch) => {
  try {
    let { user,  cities} = await profileAPI.getProfile();
    dispatch({ type: GET_PROFILE_DATA, user });
    dispatch({ type: GET_ALL_CITIES, cities });

    console.log(user);

  } catch (error) {

  }
}

export default proflieReducer;