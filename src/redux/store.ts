import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {RootReducer} from './reducers/root';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    root: RootReducer,
  }),
);

export const store = createStore(persistedReducer, undefined);

export const persistor = persistStore(store);
