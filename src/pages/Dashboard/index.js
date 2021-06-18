import React, { useCallback, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const API_URL = process.env.REACT_APP_BACKEND_API;
    const getUsers = useCallback(() => {
        axios({
            method: 'GET',
            url: `${API_URL}users`,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log('error',error);
            });
    }, [API_URL]);
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <span>Dashboard</span>
    )
}

export default Dashboard;