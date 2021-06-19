import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './userReducer';
import alertsReducer from './alertsReducer'
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
    user: userReducer,
    alert: alertsReducer,
    error: errorReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
