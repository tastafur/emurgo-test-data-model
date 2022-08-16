import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import rootReducer from './reducers';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {MMKV} from 'react-native-mmkv';

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

export const configureStore = () => {
  const store = createStore(persistedReducer);

  const persitor = persistStore(store);

  return {store, persitor};
};
