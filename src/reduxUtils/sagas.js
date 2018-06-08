import { all } from 'redux-saga/effects';
import HomeSaga from 'Home/redux/behaviorSagas';

export default function* sagas() {
  yield all([HomeSaga()]);
}
