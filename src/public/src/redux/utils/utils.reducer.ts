// External
import { Reducer } from 'redux';
// Types
import { UtilsAction, UtilsState, UPDATE_LOADING, TOGGLE_SUCCESS } from './utils.types';

/**
 * Utils reducer
 * @author Maciej Krawczyk
 */

const INITIAL_STATE: UtilsState = {
  loading: false,
  success: false,
};

const utilsReducer: Reducer<UtilsState, UtilsAction> = (state = INITIAL_STATE, action: UtilsAction): UtilsState => {
  switch (action.type) {
    case UPDATE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case TOGGLE_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };
    default:
      return state;
  }
};

export default utilsReducer;
