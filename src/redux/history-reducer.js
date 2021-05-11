import { reset, stopSubmit } from "redux-form";
import { historyAPI } from "../api/api";

const GET_SUCCESS_HISTORY_ANALYSIS = 'history-reducer/GET_SUCCESS_HISTORY_ANALYSIS';
const FAIL_HISTORY_ANALYSIS = 'history-reducer/FAIL_HISTORY_ANALYSIS';

const GET_SUCCESS_HISTORY_LIST = 'history-reducer/GET_SUCCESS_HISTORY_LIST';
const FAIL_HISTORY_LIST = 'history-reducer/FAIL_HISTORY_LIST';

const SET_HISTORY_CURRENT_PAGE = 'history-reducer/SET_HISTORY_CURRENT_PAGE';

let initialState = {
    historyDetail: null,
    historyList: null,

    // PAGINATION
    totalCount: null,
    pagesCount: 10,
    currentPage: 1,
}

const historyReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_SUCCESS_HISTORY_ANALYSIS:
            return {
                ...state,
                historyDetail: action.historyDetail
            }
        case FAIL_HISTORY_ANALYSIS:
            return {
                ...state,
                historyDetail: null,
            }

        
        case GET_SUCCESS_HISTORY_LIST:
            return {
                ...state,
                historyList: action.data,
                totalCount: action.count
            }
        case FAIL_HISTORY_LIST:
            return {
                ...state,
                historyList: null,
                totalCount: null,
            }

        case SET_HISTORY_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }


        default:
            return state;
    }
}

export const failHistoryAnalys = () => ({ type: FAIL_HISTORY_ANALYSIS });
export const setHistoryCurrentPage = (currentPage) => ({ type: SET_HISTORY_CURRENT_PAGE, currentPage})

export const getHistoryAnalysThunk = (historyUID) => async (dispatch) => {
    try {
        let historyDetail = await historyAPI.getAnalysHistory(historyUID);
        dispatch({ type: GET_SUCCESS_HISTORY_ANALYSIS,  historyDetail})
    } catch (error) {
        dispatch(failHistoryAnalys())
    }
}

export const getHistoryListThunk = (currentPage, pageSize) => async (dispatch) => {
    try {
        let { count, data } = await historyAPI.getHistoryList(currentPage, pageSize);
        dispatch({ type: GET_SUCCESS_HISTORY_LIST, data, count });
    } catch (error) {
        dispatch({ type: FAIL_HISTORY_LIST });
    }
}

export const reportErrorThunk = (question_id, text, is_group) => async (dispatch) => {
    try {
        await historyAPI.reportError(question_id, text, is_group);
        dispatch(reset('report-error'));
        dispatch(stopSubmit('report-error', { _error: 'Сіздің хабарламаңыз сәтті орындалды !' }))
        
    } catch (error) {

    }
}

export default historyReducer;

