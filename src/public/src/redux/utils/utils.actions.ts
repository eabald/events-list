import { UtilsAction, UPDATE_LOADING, TOGGLE_SUCCESS } from './utils.types';

export const updateLoading = (isLoading: boolean): UtilsAction => ({
  type: UPDATE_LOADING,
  payload: isLoading,
});

export const toggleSuccess = (visible: boolean): UtilsAction => ({
  type: TOGGLE_SUCCESS,
  payload: visible,
});
