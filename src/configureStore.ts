import {configureStore, compose} from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

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

const enhancer = compose(reduxReset(CLEAN_STATE_APP));
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
  enhancers: [enhancer],
});

sagaMiddleware.run(rootSagas);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
