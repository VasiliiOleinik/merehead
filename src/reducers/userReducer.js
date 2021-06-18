const GET_USERS = "GET_USERS";
const DELETE_USER = "DELETE_USER";
const GET_USER = "GET_USER";

const defaultState = {
  users: [],
  editUser: []
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_USERS: return { ...state, users: action.payload }
    case GET_USER: return { ...state, editUser: action.payload }
    case DELETE_USER: return { ...state, users: [...state.users.filter(user => user.id !== action.payload)] }
    default:
      return state
  }
};

export const getUsers = (users) => ({ type: GET_USERS, payload: users });
export const setDeleteUser = (id) => ({ type: DELETE_USER, payload: id });
export const getUser = (id) => ({ type: GET_USER, payload: id });