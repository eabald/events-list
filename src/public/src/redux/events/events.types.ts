import { Action } from 'redux';

/**
 * Events redux types collection
 * @author Maciej Krawczyk
 */

export interface EventsState {
  events: EventData[];
  error: string | null;
}

export const GET_EVENTS_START = 'GET_EVENTS_START';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_ERROR = 'GET_EVENTS_ERROR';

export const DELETE_EVENT_START = 'DELETE_EVENT_START';
export const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';
export const DELETE_EVENT_ERROR = 'DELETE_EVENT_ERROR';

export const CREATE_EVENT_START = 'CREATE_EVENT_START';
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS';
export const CREATE_EVENT_ERROR = 'CREATE_EVENT_ERROR';

export const UPDATE_EVENT_START = 'UPDATE_EVENT_START';
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS';
export const UPDATE_EVENT_ERROR = 'UPDATE_EVENT_ERROR';

export const CLEAR_EVENTS_ERROR = 'CLEAR_EVENTS_ERROR';

export interface GetEventsStartAction extends Action {
  type: typeof GET_EVENTS_START;
}

export interface GetEventsSuccessAction extends Action {
  type: typeof GET_EVENTS_SUCCESS;
  payload: EventData[];
}

export interface GetEventsErrorAction extends Action {
  type: typeof GET_EVENTS_ERROR;
  payload: string;
}

export interface DeleteEventStartAction extends Action {
  type: typeof DELETE_EVENT_START;
  payload: number;
}

export interface DeleteEventSuccessAction extends Action {
  type: typeof DELETE_EVENT_SUCCESS;
  payload: number;
}

export interface DeleteEventErrorAction extends Action {
  type: typeof DELETE_EVENT_ERROR;
  payload: string;
}

export interface CreateEventStartAction extends Action {
  type: typeof CREATE_EVENT_START;
  payload: EventData;
}

export interface CreateEventSuccessAction extends Action {
  type: typeof CREATE_EVENT_SUCCESS;
  payload: EventData;
}

export interface CreateEventErrorAction extends Action {
  type: typeof CREATE_EVENT_ERROR;
  payload: string;
}

export interface UpdateEventStartAction extends Action {
  type: typeof UPDATE_EVENT_START;
  payload: EventData;
}

export interface UpdateEventSuccessAction extends Action {
  type: typeof UPDATE_EVENT_SUCCESS;
  payload: EventData;
}

export interface UpdateEventErrorAction extends Action {
  type: typeof UPDATE_EVENT_ERROR;
  payload: string;
}

export interface ClearEventsErrorAction extends Action {
  type: typeof CLEAR_EVENTS_ERROR;
}

export type EventsAction =
  | GetEventsStartAction
  | GetEventsSuccessAction
  | GetEventsErrorAction
  | DeleteEventStartAction
  | DeleteEventSuccessAction
  | DeleteEventErrorAction
  | CreateEventStartAction
  | CreateEventSuccessAction
  | CreateEventErrorAction
  | UpdateEventStartAction
  | UpdateEventSuccessAction
  | UpdateEventErrorAction
  | ClearEventsErrorAction;
