import React from 'react';
import { Navbar } from 'react-bootstrap';

const TheHeader = () => (
    <>
        <Navbar bg="dark" variant="dark" className="mb-4">
            <Navbar.Brand href="#home">Merehead task</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Разработка: <a href="https://teleg.run/vasiliy_oleinik" target="_blank">Vasilii Oleinik</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    </>
)

export default TheHeader;