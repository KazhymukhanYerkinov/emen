import { subjectAPI } from "../api/api";

const GET_ALL_SUBJECTS_SUCCESS = 'GET_ALL_SUBJECTS_SUCCESS';



let initialState = {
    subjects: []
}

const subjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SUBJECTS_SUCCESS:
            return {
                ...state,
                subjects: action.subjects
            }
        default:
            return state;
    }
}

const setAllSubjectDispatch = (subjects) => ({ type: GET_ALL_SUBJECTS_SUCCESS, subjects });

export const getSubjectsThunk = () => async (dispatch) => {
    try {
        let data = await subjectAPI.getSubjects();
        dispatch(setAllSubjectDispatch(data));

    } catch (err) {

    }
}

export default subjectReducer;
