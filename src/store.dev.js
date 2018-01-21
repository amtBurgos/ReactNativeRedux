import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import main from './reducers/main';
import settings from './reducers/settings';
import maps from './reducers/maps';

const rootReducer = combineReducers({
  main,
  settings,
  maps,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const persistedStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
  const persistor = persistStore(store);
  return { store, persistor };
};

export default persistedStore;
