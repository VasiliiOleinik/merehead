const SET_ERROR = "SET_ERROR";

const defaultState = {
    errors: [],
};

export default function errorReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ERROR: return { ...state, errors: action.payload }
        default:
            return state
    }
};

export const setError = (error) => ({ type: SET_ERROR, payload: error });