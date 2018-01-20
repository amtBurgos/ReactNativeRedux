import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import main from './reducers/main';
import settings from './reducers/settings';
import maps from './reducers/maps';
import common from './reducers/common';

const rootReducer = combineReducers({
  main,
  settings,
  maps,
  common,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
