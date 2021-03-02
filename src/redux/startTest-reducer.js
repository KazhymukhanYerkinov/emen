import { startTestAPI } from "../api/api";

const TEST__START__SUCCESS = 'TEST__START__SUCCESS';
const TEST__START__FAIL = 'TEST__START__FAIL';

let initialState = {
    isStart: false,
    examUID: null,
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST__START__SUCCESS:
            return {
                ...state,
                isStart: true,
                examUID: action.examUID
            }
        case TEST__START__FAIL:
            return {
                ...state,
                isStart: false,
                examUID: null
            }
        default:
            return state;
    }
}

export const postStartTestThunk = (exam_type, subject, with_hint, difficulty, topic_id = null) => async (dispatch) => {
    try {
        const data = await startTestAPI.postStartTest(exam_type, subject, with_hint, difficulty, topic_id);
        dispatch({ type: TEST__START__SUCCESS, examUID: data.exam_uuid })
    } catch (error) {
        dispatch({ type: TEST__START__FAIL })
    }
}

export default testReducer;