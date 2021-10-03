// External
import { Action } from 'redux';

export const UPDATE_LOADING = 'UPDATE_LOADING';

export const TOGGLE_SUCCESS = 'TOGGLE_SUCCESS';

export interface UpdateLoadingAction extends Action {
  type: typeof UPDATE_LOADING;
  payload: boolean;
}

export interface ToggleSuccessAction extends Action {
  type: typeof TOGGLE_SUCCESS;
  payload: boolean;
}

export type UtilsAction = UpdateLoadingAction | ToggleSuccessAction;

export interface UtilsState {
  loading: boolean;
  success: boolean;
}
