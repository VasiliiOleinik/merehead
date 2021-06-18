import axios from 'axios';
import { getUsers, setDeleteUser, getUser } from 'src/reducers/userReducer';
import { setAlert, setShowAlert } from 'src/reducers/alertsReducer';
const API_URL = process.env.REACT_APP_BACKEND_API;

// Получение всех пользователей
export function getUsersApi() {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}users`, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            dispatch(getUsers(response.data));
        } catch (e) {
            dispatch(setAlert({ type: 'error', title: "Error", text: e.response.data.message }));
            dispatch(setShowAlert());
        }
    }
};

// Получение пользователя по ID
export function getUserApi(id) {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}user/${id}`, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            dispatch(getUser(response.data));
        } catch (e) {
            dispatch(setAlert({ type: 'error', title: "Error", text: e.response.data.message }));
            dispatch(setShowAlert());
        }
    }
};

// Удаление пользователя
export function deleteUser(id) {
    return async dispatch => {
        try {
            await axios.delete(`${API_URL}user/${id}`, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            dispatch(setDeleteUser(id));
            dispatch(setAlert({ type: 'success', title: "Success", text: "Пользователь успешно удален" }));
            dispatch(setShowAlert());
        } catch (e) {
            dispatch(setAlert({ type: 'error', title: "Error", text: e.response.data.message }));
            dispatch(setShowAlert());
        }
    }
};

// Создание пользователя
export const createUser = async (id, name, surname, desc, dispatch) => {
    try {
        await axios.post(`${API_URL}users`, {
            id,
            name,
            surname,
            desc,
            avatar: null
        })
        dispatch(setAlert({ type: 'success', title: "Success", text: "Пользователь успешно создан" }));
        dispatch(setShowAlert());
    } catch (e) {
        dispatch(setAlert({ type: 'error', title: "Error", text: e.response.data.message }));
        dispatch(setShowAlert());
    }
};

// Редактирование пользователя
export const editUser = async (id, name, surname, desc, dispatch) => {
    try {
        await axios.put(`${API_URL}user/${id}`, {
            name,
            surname,
            desc,
            avatar: null
        })
        dispatch(setAlert({ type: 'success', title: "Success", text: "Пользователь успешно изменен" }));
        dispatch(setShowAlert());
    } catch (e) {
        dispatch(setAlert({ type: 'error', title: "Error", text: e.response.data.message }));
        dispatch(setShowAlert());
    }
};