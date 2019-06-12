import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const isDev = process.env.NODE_ENV !== 'production';
const middlewares = isDev ? applyMiddleware(logger) : null;

export const store = createStore(
  rootReducer,
  isDev ? composeWithDevTools(middlewares) : middlewares,
);
