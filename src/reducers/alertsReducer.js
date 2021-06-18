const SET_ALERT = "SET_ALERT";
const SHOW_ALERT = "SHOW_ALERT";
const HIDE_ALERT = "HIDE_ALERT";

const defaultState = {
  alerts: [],
  isVisible: false
};

export default function alertsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ALERT: return { ...state, alerts: action.payload }
    case SHOW_ALERT: return { ...state, isVisible: true }
    case HIDE_ALERT: return { ...state, isVisible: false }
    default:
      return state
  }
};

export const setAlert = (alert) => ({ type: SET_ALERT, payload: alert });
export const setShowAlert = () => ({ type: SHOW_ALERT });
export const setHideAlert = () => ({ type: HIDE_ALERT });