import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Loader from 'src/components/Loading';
import routes from 'src/routes';

const TheContent = () => {
    return (
        <body>
            <div class="container">
                <Suspense fallback={Loader}>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                        <route.component {...props} />
                                    )} />
                            )
                        })}
                        <Redirect from="/" to="/404" />
                    </Switch>
                </Suspense>
            </div>
        </body>
    )
}

export default TheContent;