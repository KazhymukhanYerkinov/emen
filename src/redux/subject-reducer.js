import { subjectAPI } from "../api/api";

const GET_ALL_SUBJECTS_SUCCESS = 'GET_ALL_SUBJECTS_SUCCESS';
const GET_DETAIL_SUBJECTS_SUCCESS = 'GET_DETAIL_SUBJECTS_SUCCESS';



let initialState = {
    subjects: [],
    detail: null,
}

const subjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SUBJECTS_SUCCESS:
            return {
                ...state,
                subjects: action.subjects
            }
        case GET_DETAIL_SUBJECTS_SUCCESS:
            return {
                ...state,
                detail: action.detail

            }
        default:
            return state;
    }
}

const setAllSubjectDispatch = (subjects) => ({ type: GET_ALL_SUBJECTS_SUCCESS, subjects });
const setDetailSubject = (detail) => ({ type: GET_DETAIL_SUBJECTS_SUCCESS, detail });

export const getSubjectsThunk = () => async (dispatch) => {
    try {
        let data = await subjectAPI.getSubjects();
        dispatch(setAllSubjectDispatch(data));

    } catch (err) {
        console.log('Error Subjects')
    }
}

export const getDetailSubjectThunk = (subject) => async (dispatch) => {
    try {
        let data = await subjectAPI.getDetail(subject);
        dispatch(setDetailSubject(data));
    } catch (err) {
        console.log('Error detail')
    }
}

export default subjectReducer;
