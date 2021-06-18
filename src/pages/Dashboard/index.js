import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { matchPath, Link } from "react-router-dom";
import { Trash, PencilSquare } from 'react-bootstrap-icons';
import { Button, Card } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import options from './tableOptions';
import { deleteUser } from 'src/actions/user';

const Dashboard = () => {
    const dispatch = useDispatch();
    const usersList = useSelector(state => state.user.users);
    
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
            const match = matchPath(`/user-edit/${id}`, {
                path: "/user-edit/:id",
                exact: false,
                strict: false
            });
            return (
                <div>
                    <Link to={match.url}>
                        <Button
                            variant="primary"
                            className="mr-3"
                            title="Редактирование пользователя"
                        >
                            <PencilSquare />
                        </Button>
                    </Link>

                    <Button variant="danger" title="Удалить пользователя" onClick={() => dispatch(deleteUser(id))}>
                        <Trash />
                    </Button>
                </div>
            )
        },
    }];

    return (
        <Card body>
            <BootstrapTable keyField='id' data={usersList} bootstrap4 columns={columns} pagination={paginationFactory(options)} bordered={false} />
        </Card>
    )
}

export default Dashboard;