import { startTestAPI } from "../api/api";
import { successError } from "./error-reducer";

const POST_QUESTION_SUCCESS = 'test-reducer/POST_QUESTION_SUCCESS';
const POST_QUESTION_FAIL = 'test-reducer/POST_QUESTION_FAIL';

const GET_QUESTIONS_SUCCESS = 'test-reducer/GET_QUESTIONS_SUCCESS';
const GET_QUESTIONS_FAIL = 'test-reducer/GET_QUESTIONS_FAIL';

const IS_FETCHING_DATA_TRUE = 'test-reducer/IS_FETCHING_DATA_TRUE';
const IS_FETCHING_DATA_FALSE = 'test-reducer/IS_FETCHING_DATA_FALSE';


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
                isStart: false
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

export const setQuestionsFailAC = () => ({ type: GET_QUESTIONS_FAIL });

export const postStartTestThunk = (exam_type, subject, with_hint, difficulty, topic_id = null, profile_subject_1, profile_subject_2) => async (dispatch) => {
    try {
        const data = await startTestAPI.postStartTest(exam_type, subject, with_hint, difficulty, topic_id, profile_subject_1, profile_subject_2);
        dispatch({ type: POST_QUESTION_SUCCESS, examUID: data.exam_uuid });
    } catch (error) {

        
        if (Number(error.response.data.status_code) === 1) {

            // you have unfinished exams error
            let error_data = error.response.data.unfinished_exam
            dispatch(successError(1, error_data))   
        }
        else if (Number(error.response.data.status_code) === 5) {

            // No varinats error
            dispatch(successError(5, null));
        }

        else if (Number(error.response.data.status_code) === 3) {

            // you have no money error
            dispatch(successError(3, null));
        }

    }
}

export const getQuestionThunk = (uid) => async (dispatch) => {
    try {
        dispatch({ type: IS_FETCHING_DATA_TRUE });

        const data = await startTestAPI.getQuestion(uid);
        dispatch({ type: GET_QUESTIONS_SUCCESS, data: data });

        dispatch({ type: IS_FETCHING_DATA_FALSE });

    } catch (error) {

        
        if (error.response.data.status_code === 6) {

            // wrong uuid code
            dispatch(successError(6, null));
        }

        else if (error.response.data.status_code === 2) {

            // you do not have access this test
            dispatch(successError(2, null));

        }

        else if (error.response.data.status_code === 4) {

            // this examination is finished
            dispatch(successError(4, null));

        }
        dispatch({ type: IS_FETCHING_DATA_FALSE });
    }
}

export const saveTestQuestionThunk = (examUID, left_seconds, is_paused, student_answers) => async (dispatch) => {
    try {
        await startTestAPI.saveQuestion(examUID, left_seconds, is_paused, student_answers);

    } catch (e) {
        
    } 
}

export const finishAllTestThunk = (examUID, left_seconds, is_paused, student_answers) => async (dispatch) => {
    try {
        await startTestAPI.saveQuestion(examUID, left_seconds, true, student_answers);
        await startTestAPI.finishQuestion(examUID, left_seconds, is_paused, student_answers);

        
    } catch (e) {
        
    }
}

export default testReducer;