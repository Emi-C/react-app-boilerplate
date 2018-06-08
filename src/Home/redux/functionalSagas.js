import { put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import actions from 'reduxUtils/actions';

export function* increment() {
  try {
    yield delay(500);
    yield put(actions.HOME.INCREMENT_SUCCESS.create());
  } catch (err) {
    yield put(actions.HOME.INCREMENT_ERROR.create(err));
  }
}

export function* decrement() {
  try {
    yield delay(500);
    yield put(actions.HOME.DECREMENT_SUCCESS.create());
  } catch (err) {
    yield put(actions.HOME.DECREMENT_ERROR.create(err));
  }
}
