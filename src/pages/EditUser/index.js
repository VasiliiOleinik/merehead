import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Card } from 'react-bootstrap';
import { getUserApi } from 'src/actions/user';
import { editUser } from 'src/actions/user';

const EditUser = ({ match }) => {
    const dispatch = useDispatch();
    const editUserData = useSelector(state => state.user.editUser);
    const responseError = useSelector(state => state.error.errors);
    const [name, setName] = useState(editUserData.name);
    const [surname, setSurname] = useState(editUserData.surname);
    const [text, setText] = useState(editUserData.desc);

    useEffect(() => {
        dispatch(getUserApi(match.params.id))
    }, [dispatch, match.params.id]);

    function onSubmitHandler(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Card body>
            <h1 className="mb-4">Редактирование пользователя {match.params.id}</h1>
            <Form onSubmit={e => onSubmitHandler(e)}>
                <Form.Group controlId="user-name">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ваше имя"
                        onChange={e => setName(e.target.value)}
                        defaultValue={editUserData.name}
                        isInvalid={responseError.name ? true : false}
                    />
                    <Form.Control.Feedback type="invalid">
                        {responseError.name ? responseError.name[0] : ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="user-surname">
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ваша фамилия"
                        onChange={e => setSurname(e.target.value)}
                        defaultValue={editUserData.surname}
                        isInvalid={responseError.surname ? true : false}
                    />
                    <Form.Control.Feedback type="invalid">
                        {responseError.surname ? responseError.surname[0] : ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="user-about">
                    <Form.Label>О себе</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Текст..."
                        onChange={e => setText(e.target.value)}
                        defaultValue={editUserData.desc}
                        isInvalid={responseError.desc ? true : false}
                    />
                    <Form.Control.Feedback type="invalid">
                        {responseError.desc ? responseError.desc[0] : ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => editUser(match.params.id, name, surname, text, dispatch)}>
                    Изменить пользователя
                </Button>
            </Form>
        </Card>
    )
}

export default EditUser;