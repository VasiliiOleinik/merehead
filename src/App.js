
import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import history from './utils/history';
import Page404 from './pages/Page404';
import TheLayout from './containers/TheLayout';
import Alerts from 'src/components/Alerts';
import { getUsersApi } from './actions/user';


function App() {
  const dispatch = useDispatch();
  const alert = useSelector(state => state.alert.alerts);

  useEffect(() => {
    dispatch(getUsersApi())
  }, [dispatch]);

  return (
    <>
      <Alerts type={alert.type} title={alert.title} text={alert.text} isOpen={alert.isOpen} />
      <Router history={history}>
        <Switch>
          <Route path="/404" name="Page 404" render={() => <Page404 />} />
          <Route path="/" name="Главная страница" render={props => <TheLayout {...props} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
