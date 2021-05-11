import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { boardReducer } from './reducers/boardReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    boardReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
