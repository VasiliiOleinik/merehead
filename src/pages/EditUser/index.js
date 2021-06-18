import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Card } from 'react-bootstrap';
import { getUserApi } from 'src/actions/user';
import { editUser } from 'src/actions/user';

const EditUser = ({ match }) => {
    const dispatch = useDispatch();
    const editUserData = useSelector(state => state.user.editUser);
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
            <Form onSubmit={e => onSubmitHandler(e)}>
                <Form.Group controlId="user-name">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control type="text" placeholder="Ваше имя" onChange={e => setName(e.target.value)} defaultValue={editUserData.name} />
                </Form.Group>
                <Form.Group controlId="user-surname">
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control type="text" placeholder="Ваша фамилия" onChange={e => setSurname(e.target.value)} defaultValue={editUserData.surname} />
                </Form.Group>
                <Form.Group controlId="user-about">
                    <Form.Label>О себе</Form.Label>
                    <Form.Control type="text" placeholder="Текст..." onChange={e => setText(e.target.value)} defaultValue={editUserData.desc} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => editUser(match.params.id, name, surname, text, dispatch)}>
                    Изменить пользователя
                </Button>
            </Form>
        </Card>
    )
}

export default EditUser;