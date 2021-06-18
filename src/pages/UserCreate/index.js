import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { createUser } from 'src/actions/user';
import { useDispatch } from 'react-redux';

const UserCreate = () => {
    const generateUserId = Math.floor(Math.random() * (10000 - 2000)) + 2000;
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [text, setText] = useState('');

    function onSubmitHandler(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Card body>
            <Form onSubmit={e => onSubmitHandler(e)}>
                <Form.Group controlId="user-name">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control type="text" placeholder="Ваше имя" onChange={e => setName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="user-surname">
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control type="text" placeholder="Ваша фамилия" onChange={e => setSurname(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="user-about">
                    <Form.Label>О себе</Form.Label>
                    <Form.Control type="text" placeholder="Текст..." onChange={e => setText(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => createUser(generateUserId, name, surname, text, dispatch)}>
                    Создать пользователя
                </Button>
            </Form>
        </Card>
    )
}

export default UserCreate;