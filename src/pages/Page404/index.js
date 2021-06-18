import React from 'react';
import { TheFooter, TheHeader } from 'src/containers';

import history from 'src/utils/history';

const Page404 = () => (
    <div className="app">
        <TheHeader />
        <body>
      <div class="container">
                <h1 style={{ fontSize: '4em', textAlign: 'center', fontWeight: '700' }}>
                    404
                </h1>
                <p style={{ fontSize: '1.5em', textAlign: 'center' }}>
                    Дружище, извини, но мы не смогли найти эту страницу…
                </p>
                <button size='large' color='blue' onClick={() => history.goBack()}>
                    Вернуться назад
                </button>
            </div>
            </body>
        <TheFooter />
    </div>
)

export default Page404;