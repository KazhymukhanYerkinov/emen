import { startTestAPI } from "../api/api";

const POST_QUESTION_SUCCESS = 'POST_QUESTION_SUCCESS';
const POST_QUESTION_FAIL = 'POST_QUESTION_FAIL';

const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
const GET_QUESTIONS_FAIL = 'GET_QUESTIONS_FAIL';

const IS_FETCHING_DATA_TRUE = 'IS_FETCHING_DATA_TRUE';
const IS_FETCHING_DATA_FALSE = 'IS_FETCHING_DATA_FALSE';





let initialState = {

    // тест пост
    isStart: false,
    examUID: null,

    // тест гет
    isFetching: false,
    data: null,
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {  
        // Тесты бастау алдындағы пост запрос
        case POST_QUESTION_SUCCESS:
            return {
                ...state,
                isStart: true,
                examUID: action.examUID
            }
        case POST_QUESTION_FAIL:
            return {
                ...state,
                isStart: false,
                examUID: null
            }
        // Сұрақтар мен жауаптарды сақтау
        case GET_QUESTIONS_SUCCESS:
            return {
                ...state,
                data: action.data,
            }
        case GET_QUESTIONS_FAIL:
            return {
                ...state,
                data: null,
            }
        // Тест бетіне барғандағы загрузка сақтау
        case IS_FETCHING_DATA_TRUE:
            return {
                ...state,
                isFetching: true
            }
        case IS_FETCHING_DATA_FALSE:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state;
    }
}

export const postStartTestThunk = (exam_type, subject, with_hint, difficulty, topic_id = null, profile_subject_1, profile_subject_2) => async (dispatch) => {
    try {
        const data = await startTestAPI.postStartTest(exam_type, subject, with_hint, difficulty, topic_id, profile_subject_1, profile_subject_2);
        dispatch({ type: POST_QUESTION_SUCCESS, examUID: data.exam_uuid });
    } catch (error) {
        dispatch({ type: POST_QUESTION_FAIL });
    }
}

export const getQuestionThunk = (uid) => async (dispatch) => {
    try {
        dispatch({ type: IS_FETCHING_DATA_TRUE });

        const data = await startTestAPI.getQuestion(uid);
        dispatch({ type: GET_QUESTIONS_SUCCESS, data: data });

        dispatch({ type: IS_FETCHING_DATA_FALSE });
    } catch (error) {
        dispatch({ type: GET_QUESTIONS_FAIL });
    }
}

export const saveTestQuestionThunk = (examUID, left_seconds, is_paused, student_answers) => async (dispatch) => {
    try {
        await startTestAPI.saveQuestion(examUID, left_seconds, is_paused, student_answers);

    } catch (e) {
        console.log(e);
    } 
}

export const finishAllTestThunk = (examUID, left_seconds, is_paused, student_answers) => async (dispatch) => {
    try {
        await startTestAPI.finishQuestion(examUID, left_seconds, is_paused, student_answers);
    } catch (e) {
        console.log(e)
    }
}

export default testReducer;