import { startTestAPI } from "../api/api";

const POST_QUESTION_SUCCESS = 'test-reducer/POST_QUESTION_SUCCESS';
const POST_QUESTION_FAIL = 'test-reducer/POST_QUESTION_FAIL';

const GET_QUESTIONS_SUCCESS = 'test-reducer/GET_QUESTIONS_SUCCESS';
const GET_QUESTIONS_FAIL = 'test-reducer/GET_QUESTIONS_FAIL';

const IS_FETCHING_DATA_TRUE = 'test-reducer/IS_FETCHING_DATA_TRUE';
const IS_FETCHING_DATA_FALSE = 'test-reducer/IS_FETCHING_DATA_FALSE';

const SET_ERRORS_START_TESTS = 'test-reducer/SET_ERRORS_START_TESTS';
const FAIL_ERROR_START_TESTS = 'test-reducer/FAIL_ERROR_START_TESTS';





let initialState = {

    // тест пост
    isStart: false,
    examUID: null,

    // тест гет
    isFetching: false,
    data: null,

    // error текст
    errorsStartTests: {
        showError: false,
        errorMessage: null,
        unfinishedExam: null,
    },


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
        case SET_ERRORS_START_TESTS: {

            let stateCopy = {...state};
            let copyErrorStartTests = stateCopy.errorsStartTests;
            copyErrorStartTests.showError = true;
            copyErrorStartTests.errorMessage = action.errorMessage;
            copyErrorStartTests.unfinishedExam = action.unfinishedExam;
            console.log(stateCopy);
            return stateCopy;

        }
        case FAIL_ERROR_START_TESTS: {
            let stateCopy = {...state};
            let copyErrorStartTests = stateCopy.errorsStartTests;
            copyErrorStartTests.showError = false;
            copyErrorStartTests.errorMessage = null;
            copyErrorStartTests.unfinishedExam = null;

            return stateCopy;
        }

        default:
            return state;
    }
}
// close modal error
export const setShowErrorAC = () => ({ type: FAIL_ERROR_START_TESTS });

export const setQuestionsFailAC = () => ({ type: GET_QUESTIONS_FAIL });

export const postStartTestThunk = (exam_type, subject, with_hint, difficulty, topic_id = null, profile_subject_1, profile_subject_2) => async (dispatch) => {
    try {
        const data = await startTestAPI.postStartTest(exam_type, subject, with_hint, difficulty, topic_id, profile_subject_1, profile_subject_2);
        dispatch({ type: POST_QUESTION_SUCCESS, examUID: data.exam_uuid });
    } catch (error) {

        
        if (Number(error.response.data.status_code) === 1) {

            // you have unfinished exams error
            let errorMessage = 'У вас незавершенный тест. Вы не можете начать новый тест, не завершив его.';
            let unfinishedExam = error.response.data.unfinished_exam;

            dispatch({ type: SET_ERRORS_START_TESTS, errorMessage, unfinishedExam });    
        }
        else if (Number(error.response.data.status_code) === 5) {

            // No varinats error
            let errorMessage = 'Извините, варианты закончились. В ближайшее время мы добавим в базу новые вопросы. Подождите пожалуйста :)';
            let unfinishedExam = null;

            dispatch({ type: SET_ERRORS_START_TESTS, errorMessage, unfinishedExam });
        }

        else if (Number(error.response.data.status_code) === 3) {

            // you have no money error
            let errorMessage = 'У вас закончились деньги. Пополните свой счет';
            let unfinishedExam = null;

            dispatch({ type: SET_ERRORS_START_TESTS, errorMessage, unfinishedExam });
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
            let errorMessage = 'Извините, такого теста нет';
            let unfinishedExam = null;

            dispatch({ type: SET_ERRORS_START_TESTS, errorMessage, unfinishedExam });
        }

        else if (error.response.data.status_code === 2) {

            // you do not have access this test
            let errorMessage = 'У вас нет доступа к этому тесту';
            let unfinishedExam = null;

            dispatch({ type: SET_ERRORS_START_TESTS, errorMessage, unfinishedExam });
        }

        else if (error.response.data.status_code === 4) {

            // this examination is finished
            let errorMessage = 'Этот тест завершен.';
            let unfinishedExam = null;

            dispatch({ type: SET_ERRORS_START_TESTS, errorMessage, unfinishedExam });
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