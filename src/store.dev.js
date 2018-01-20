import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import main from './reducers/main';
import settings from './reducers/settings';
import maps from './reducers/maps';

const rootReducer = combineReducers({
  main,
  settings,
  maps,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
