// Types
import {
  DeleteEventStartAction,
  GetEventsErrorAction,
  GetEventsStartAction,
  GetEventsSuccessAction,
  GET_EVENTS_ERROR,
  GET_EVENTS_START,
  GET_EVENTS_SUCCESS,
  DELETE_EVENT_START,
  DeleteEventSuccessAction,
  DELETE_EVENT_SUCCESS,
  DeleteEventErrorAction,
  DELETE_EVENT_ERROR,
  CreateEventStartAction,
  CREATE_EVENT_START,
  CreateEventSuccessAction,
  CREATE_EVENT_SUCCESS,
  CreateEventErrorAction,
  CREATE_EVENT_ERROR,
  UPDATE_EVENT_START,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_ERROR,
  UpdateEventStartAction,
  UpdateEventSuccessAction,
  UpdateEventErrorAction,
  ClearEventsErrorAction,
  CLEAR_EVENTS_ERROR,
} from './events.types';

/**
 * Events redux action collection
 * @author Maciej Krawczyk
 */

export const getEventsStart = (): GetEventsStartAction => ({
  type: GET_EVENTS_START,
});

export const getEventsSuccess = (events: EventData[]): GetEventsSuccessAction => ({
  type: GET_EVENTS_SUCCESS,
  payload: events,
});

export const getEventsError = (error: ApiError): GetEventsErrorAction => ({
  type: GET_EVENTS_ERROR,
  payload: error.message,
});

export const deleteEventStart = (id: number): DeleteEventStartAction => ({
  type: DELETE_EVENT_START,
  payload: id,
});

export const deleteEventSuccess = (id: number): DeleteEventSuccessAction => ({
  type: DELETE_EVENT_SUCCESS,
  payload: id,
});

export const deleteEventError = (error: ApiError): DeleteEventErrorAction => ({
  type: DELETE_EVENT_ERROR,
  payload: error.message,
});

export const createEventStart = (event: EventData): CreateEventStartAction => ({
  type: CREATE_EVENT_START,
  payload: event,
});

export const createEventSuccess = (event: EventData): CreateEventSuccessAction => ({
  type: CREATE_EVENT_SUCCESS,
  payload: event,
});

export const createEventError = (error: ApiError): CreateEventErrorAction => ({
  type: CREATE_EVENT_ERROR,
  payload: error.message,
});

export const updateEventStart = (event: EventData): UpdateEventStartAction => ({
  type: UPDATE_EVENT_START,
  payload: event,
});

export const updateEventSuccess = (event: EventData): UpdateEventSuccessAction => ({
  type: UPDATE_EVENT_SUCCESS,
  payload: event,
});

export const updateEventError = (error: ApiError): UpdateEventErrorAction => ({
  type: UPDATE_EVENT_ERROR,
  payload: error.message,
});

export const clearEventsError = (): ClearEventsErrorAction => ({
  type: CLEAR_EVENTS_ERROR,
});
