import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { main } from './reducers/main';

const rootReducer = combineReducers({ main });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
