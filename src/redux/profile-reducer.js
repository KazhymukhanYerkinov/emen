import { reset, stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const GET_PROFILE_DATA = 'profile-reducer/GET_PROFILE_DATA';
const GET_ALL_CITIES = 'profile-reducer/GET_ALL_CITIES';

const CHANGE_PASSWORD = 'profile-reducer/CHANGE_PASSWORD'
const IS_REDIRECT_PASSWORD = 'profile-reducer/IS_REDIRECT_PASSWORD'


let initialState = {
  profile_full_data: null, 
  cities: [],

  change_password: false,
  isRedirectPassword: false,
}

const proflieReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_PROFILE_DATA:
      return {
        ...state,
        profile_full_data: action.user
      }

    case GET_ALL_CITIES:
      return {
        ...state,
        cities: action.cities
      }
    case CHANGE_PASSWORD:
      return {
        ...state,
        change_password: !state.change_password
      } 
    case IS_REDIRECT_PASSWORD:
      return {
        ...state,
        isRedirectPassword: action.isRedirectPassword
      }
    
    default:
      return state
  }
}

export const handleIsRedirectPassword = (isRedirectPassword) => ({ type: IS_REDIRECT_PASSWORD, isRedirectPassword })
export const changePasswordAC = () => ({ type: CHANGE_PASSWORD });

export const getProfile = () => async (dispatch) => {
  try {
    let { user,  cities} = await profileAPI.getProfile();
    console.log(user);
    dispatch({ type: GET_PROFILE_DATA, user });
    dispatch({ type: GET_ALL_CITIES, cities });

  } catch (error) {

  }
}

export const updatePersonalProfile = (first_name, last_name, phone, city) => async (dispatch) => {
  try {
    await profileAPI.updatePersonProfile(first_name, last_name, phone, city);
    dispatch(getProfile());
  } catch (error) {

  }
}

export const changePasswordProfile = (old_password, new_password, confirm_password) => async (dispatch) => {
  if (new_password === confirm_password) {
    try {
      await profileAPI.changePassword(old_password, new_password, confirm_password);
      dispatch(changePasswordAC());
      dispatch(reset('security'));
      dispatch(handleIsRedirectPassword(false));
    } catch (error) {
      dispatch(stopSubmit('security', {'old_password': 'Введен неправильный пароль'}))
    }
  } else {
    dispatch(stopSubmit('security', {'confirm_password': 'Пароли не совпадают'}))
  }
}

export default proflieReducer;