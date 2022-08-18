import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';

import reduxReset from 'redux-reset';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {MMKV} from 'react-native-mmkv';

import rootReducer from './reducers';
import rootSagas from './sagas';

import {CLEAN_STATE_APP} from './actions/clean';

let mmkvStorage = {};

if (!__DEV__) {
  const storageMMKV = new MMKV();

  mmkvStorage = {
    setItem: (key: string, value: string | number | boolean) => {
      storageMMKV.set(key, value);
      return Promise.resolve(true);
    },
    getItem: (key: string) => {
      const value = storageMMKV.getString(key) ?? '';
      return Promise.resolve(value);
    },
    removeItem: (key: string) => {
      storageMMKV.delete(key);
      return Promise.resolve();
    },
  };
}

const persistConfig = {
  timeout: null,
  key: 'root',
  storage: __DEV__ ? AsyncStorage : mmkvStorage,
};

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = __DEV__
  ? // @ts-ignore
    (global.window && global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose
  : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  reduxReset(CLEAN_STATE_APP),
);

export const configureStore = () => {
  const store = createStore(persistedReducer, enhancer);

  sagaMiddleware.run(rootSagas);

  const persistor = persistStore(store);

  return {store, persistor};
};

export type RootState = ReturnType<typeof rootReducer>;
