import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { TheHeader } from 'src/containers';

import history from 'src/utils/history';

const Page404 = () => (
    <div className="app">
        <TheHeader />
        <Container>
            <Row>
                <h1 style={{ fontSize: '4em', textAlign: 'center', fontWeight: '700' }}>
                    404
                </h1>
                <p style={{ fontSize: '1.5em', textAlign: 'center' }}>
                    Дружище, извини, но мы не смогли найти эту страницу…
                </p>
                <button size='large' color='blue' onClick={() => history.goBack()}>
                    Вернуться назад
                </button>
            </Row>
        </Container>
    </div>
)

export default Page404;