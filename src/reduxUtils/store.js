import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import combinedReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combinedReducer, composeEnhancer(applyMiddleware(sagaMiddleware)));
/* eslint-enable */
sagaMiddleware.run(sagas);

export default store;
