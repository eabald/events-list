// External
import { all, call } from 'redux-saga/effects';
// Sagas
import eventsSagas from './events/events.sagas';

/**
 * Main sagas wrapper for async state management
 * @author Maciej Krawczyk
 */
export default function* rootSaga(): Generator {
  yield all([call(eventsSagas)]);
}
