// External
import { all, put, takeLatest, call } from 'redux-saga/effects';
// Actions
import { updateLoading } from '../utils/utils.actions';
import {
  getEventsError,
  getEventsSuccess,
  deleteEventError,
  deleteEventSuccess,
  createEventSuccess,
  createEventError,
  updateEventSuccess,
  updateEventError,
} from './events.actions';
// Api
import { createEventRequest, deleteEventRequest, getEventsRequest, updateEventRequest } from './events.api';
// Types
import {
  CreateEventStartAction,
  CREATE_EVENT_START,
  DeleteEventStartAction,
  DELETE_EVENT_START,
  GetEventsStartAction,
  GET_EVENTS_START,
  UpdateEventStartAction,
  UPDATE_EVENT_START,
} from './events.types';

/**
 * Events sagas collection
 * @author Maciej Krawczyk
 */

export function* getEvents(): Generator {
  try {
    yield put(updateLoading(true));
    const events = yield getEventsRequest();
    yield put(getEventsSuccess(events as EventData[]));
    yield put(updateLoading(false));
  } catch (error) {
    const errorData = error as { response: { data: ApiError } };
    yield put(getEventsError(errorData.response.data));
    yield put(updateLoading(false));
  }
}

export function* deleteEvent({ payload }: DeleteEventStartAction): Generator {
  try {
    yield put(updateLoading(true));
    const data = yield deleteEventRequest(payload);
    const { id } = data as { id: number };
    yield put(deleteEventSuccess(id));
    yield put(updateLoading(false));
  } catch (error) {
    const errorData = error as { response: { data: ApiError } };
    yield put(deleteEventError(errorData.response.data));
    yield put(updateLoading(false));
  }
}

export function* createEvent({ payload }: CreateEventStartAction): Generator {
  try {
    yield put(updateLoading(true));
    const event = yield createEventRequest(payload);
    yield put(createEventSuccess(event as EventData));
    yield put(updateLoading(false));
  } catch (error) {
    const errorData = error as { response: { data: ApiError } };
    yield put(createEventError(errorData.response.data));
    yield put(updateLoading(false));
  }
}

export function* updateEvent({ payload }: UpdateEventStartAction): Generator {
  try {
    yield put(updateLoading(true));
    const event = yield updateEventRequest(payload);
    yield put(updateEventSuccess(event as EventData));
    yield put(updateLoading(false));
  } catch (error) {
    const errorData = error as { response: { data: ApiError } };
    yield put(updateEventError(errorData.response.data));
    yield put(updateLoading(false));
  }
}

export function* onGetEventsStart(): Generator {
  yield takeLatest<GetEventsStartAction>(GET_EVENTS_START, getEvents);
}

export function* onDeleteEventStart(): Generator {
  yield takeLatest<DeleteEventStartAction>(DELETE_EVENT_START, deleteEvent);
}

export function* onCreateEventStart(): Generator {
  yield takeLatest<CreateEventStartAction>(CREATE_EVENT_START, createEvent);
}

export function* onUpdateEventStart(): Generator {
  yield takeLatest<UpdateEventStartAction>(UPDATE_EVENT_START, updateEvent);
}

function* eventsSagas(): Generator {
  yield all([call(onGetEventsStart), call(onDeleteEventStart), call(onCreateEventStart), call(onUpdateEventStart)]);
}

export default eventsSagas;
