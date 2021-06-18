import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import columns from './tableColumns';
import options from './tableOptions';

const Dashboard = () => {
    const API_URL = process.env.REACT_APP_BACKEND_API;
    const [data, setData] = useState([]);
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
                setData(response.data);
                console.log(response)
            })
            .catch(error => {
                console.log('error', error);
            });
    }, [API_URL]);
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <BootstrapTable keyField='location.street.number' data={data} bootstrap4 columns={columns} pagination={paginationFactory(options)} bordered={false} />
    )
}

export default Dashboard;