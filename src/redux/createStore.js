import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddle from 'redux-saga';
import thunk from 'redux-thunk';
import rootSaga from './rootSaga';

import rootReducer from './rootReducer';

const SagaMiddleware = createSagaMiddle();

export const middlewares = [thunk, SagaMiddleware, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
SagaMiddleware.run(rootSaga);

export default store;