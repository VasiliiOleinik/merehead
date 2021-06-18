import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const TheHeader = () => (
    <>
        <Navbar bg="dark" variant="dark" className="mb-4">
            <Navbar.Brand href="#home">Merehead task</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Главная</Nav.Link>
                    <Nav.Link href="/user-create">Создать пользователя</Nav.Link>
                </Nav>
                <Navbar.Text>
                    Разработка: <a href="https://teleg.run/vasiliy_oleinik" target="_blank" rel="noreferrer">Vasilii Oleinik</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    </>
)

export default TheHeader;