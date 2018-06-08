import { put, takeEvery } from 'redux-saga/effects';
import actions from 'reduxUtils/actions';
import { incrementRequest, decrementRequest } from './functionalSagas';

function* increment() {
  try {
    yield put(incrementRequest);
  } catch (err) {
    console.log(err);
  }
}

function* decrement() {
  try {
    yield put(decrementRequest);
  } catch (err) {
    console.log(err);
  }
}

export default function* HomeSaga() {
  yield takeEvery(actions.HOME.INCREMENT.type, increment);
  yield takeEvery(actions.HOME.DECREMENT.type, decrement);
}
