// External
import { all, call } from 'redux-saga/effects';
// Sagas
import eventsSagas from './events/events.sagas';

export default function* rootSaga(): Generator {
  yield all([call(eventsSagas)]);
}
