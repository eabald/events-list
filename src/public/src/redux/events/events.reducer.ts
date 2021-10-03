// External
import { Reducer } from 'redux';
// Types
import {
  CREATE_EVENT_ERROR,
  CREATE_EVENT_SUCCESS,
  DELETE_EVENT_ERROR,
  DELETE_EVENT_SUCCESS,
  EventsAction,
  EventsState,
  GET_EVENTS_ERROR,
  GET_EVENTS_SUCCESS,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_ERROR,
  CLEAR_EVENTS_ERROR,
} from './events.types';


/**
 * Events reducer
 * @author Maciej Krawczyk
 */

const INITIAL_STATE: EventsState = {
  events: [],
  error: null,
};

const eventsReducer: Reducer<EventsState, EventsAction> = (
  state = INITIAL_STATE,
  action: EventsAction
): EventsState => {
  switch (action.type) {
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        error: null,
      };
    case GET_EVENTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_EVENT_SUCCESS:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
        error: null,
      };
    case DELETE_EVENT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        events: [...state.events, action.payload],
        error: null,
      };
    case CREATE_EVENT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_EVENT_SUCCESS:
      return {
        ...state,
        events: state.events.map((event) => (event.id === action.payload.id ? action.payload : event)),
        error: null,
      };
    case UPDATE_EVENT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_EVENTS_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default eventsReducer;
