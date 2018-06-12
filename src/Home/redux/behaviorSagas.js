import { call, put, select, takeEvery } from 'redux-saga/effects';
import actions from 'reduxUtils/actions';
import { incrementRequest, decrementRequest } from './functionalSagas';

function* increment() {
  try {
    const counter = yield select((state) => state.home.counter);
    yield call(incrementRequest, counter + 1);
  } catch (err) {
    throw err;
  }
}

function* decrement() {
  try {
    const counter = yield select((state) => state.home.counter);
    if (counter < 1) {
      yield put({ type: 'NO_DECREMENT' });
    } else {
      yield call(decrementRequest, counter - 1);
    }
  } catch (err) {
    throw err;
  }
}

export default function* HomeSaga() {
  yield takeEvery(actions.HOME.INCREMENT.type, increment);
  yield takeEvery(actions.HOME.DECREMENT.type, decrement);
}
