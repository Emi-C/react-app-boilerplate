import { put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import actions from 'reduxUtils/actions';

export function* incrementRequest(counter) {
  try {
    yield delay(500);
    yield put(actions.HOME.INCREMENT_REQUEST_SUCCESS.create(counter));
  } catch (err) {
    yield put(actions.HOME.INCREMENT_REQUEST_ERROR.create(err));
  }
}

export function* decrementRequest(counter) {
  try {
    yield delay(500);
    yield put(actions.HOME.DECREMENT_REQUEST_SUCCESS.create(counter));
  } catch (err) {
    yield put(actions.HOME.DECREMENT_REQUEST_ERROR.create(err));
  }
}
