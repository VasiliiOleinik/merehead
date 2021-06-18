import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './userReducer';
import alertsReducer from './alertsReducer'

const rootReducer = combineReducers({
    user: userReducer,
    alert: alertsReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
