import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import combinedReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
/* eslint-disable no-underscore-dangle */
const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);
/* eslint-enable */
sagaMiddleware.run(sagas);

export default store;
