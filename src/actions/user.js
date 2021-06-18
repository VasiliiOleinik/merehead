import axios from 'axios';
import { getUsers, setDeleteUser } from 'src/reducers/userReducer';
const API_URL = process.env.REACT_APP_BACKEND_API;

export function getUsersApi(url) {
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
            console.log('getUsersApi error', e);
        }
    }
}

export function deleteUser(id) {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}user/${id}`, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            console.log('deleteUser', response);
            dispatch(setDeleteUser(id));
        } catch (e) {
            console.log('deleteUser error', e);
        }
    }
}

export const createUser = async (id, name, surname, desc, dispatch) => {

    try {
        const response = await axios.post(`${API_URL}users`, {
            id,
            name,
            surname, 
            desc,
            avatar: null
        })
       console.log(response)
    } catch (e) {
        console.log('createUser error', e);
    }
};