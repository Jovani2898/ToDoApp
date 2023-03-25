import {combineReducers, createStore} from 'redux';
import {RootReducer} from './reducers/root';

export const store = createStore(
  combineReducers({root: RootReducer}),
  undefined,
);
