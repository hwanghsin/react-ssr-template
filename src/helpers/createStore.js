import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../redux/reducers';
import { firebaseApp } from './firebase';

export const middlewares = [thunk.withExtraArgument(firebaseApp)];

export default () => {
  const store = createStore(
    reducers, {},
    applyMiddleware(...middlewares)
  );
  return store;
};