
import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import history from './utils/history';
import Page404 from './pages/Page404';
import TheLayout from './containers/TheLayout';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/404" name="Page 404" render={() => <Page404 />} />
        <Route path="/" name="Главная страница" render={props => <TheLayout {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
