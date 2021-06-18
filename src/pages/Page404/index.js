import React from 'react';
import { Container, Col, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { TheHeader } from 'src/containers';

const Page404 = () => {
    const history = useHistory();
    return (
        <div className="app">
            <TheHeader />
            <Container>
                <Col className="text-center">
                    <h1 style={{ fontSize: '4em', textAlign: 'center', fontWeight: '700' }}>
                        404
                    </h1>
                    <p style={{ fontSize: '1.5em', textAlign: 'center' }}>
                        Дружище, извини, но мы не смогли найти эту страницу…
                    </p>
                    <Button color='blue' onClick={() => history.goBack()}>
                        Вернуться назад
                    </Button>
                </Col>
            </Container>
        </div>
    )
}

export default Page404;