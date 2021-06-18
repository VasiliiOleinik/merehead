import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Trash, PencilSquare } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import options from './tableOptions';
import { deleteUser } from 'src/actions/user';


const Dashboard = () => {
    const dispatch = useDispatch();
    const columns = [{
        dataField: 'id',
        text: 'ID',
        sort: true
    }, {
        dataField: 'name',
        text: 'Имя',
        sort: true
    }, {
        dataField: 'surname',
        text: 'Фамилия',
        sort: true
    }, {
        dataField: 'desc',
        text: 'Описание',
        sort: true
    },
    {
        dataField: 'id',
        text: 'Действия',
        sort: false,
        formatter: (id) => {
            console.log('id', id);
            return (
                <div>
                    <Button variant="primary" href="#" className="mr-3" title="Редактирование пользователяф">
                        <PencilSquare />
                    </Button>
                    <Button variant="danger" title="Удалить пользователя" onClick={() => dispatch(deleteUser(id))}>
                        <Trash />
                    </Button>
                </div>
            )
        },
    }];

    const usersList = useSelector(state => state.user.users);

    return (
        <BootstrapTable keyField='location.street.number' data={usersList} bootstrap4 columns={columns} pagination={paginationFactory(options)} bordered={false} />
    )
}

export default Dashboard;