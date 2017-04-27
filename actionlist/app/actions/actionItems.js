import { createAction } from 'redux-actions';
import { PREFERENCES_DRAWER_OPEN, PREFERENCES_DRAWER_CLOSE, SORT_ACTION_LIST,
  FILTER_ACTION_LIST, FILTER_RESET, PREFERENCES_SELECT_COLOR,
  FILTER_DATE, PREFERENCES_RESET } from './types';

export const preferencesDrawerOpen = createAction(PREFERENCES_DRAWER_OPEN);
export const preferencesDrawerClose = createAction(PREFERENCES_DRAWER_CLOSE);
export const preferencesReset = createAction(PREFERENCES_RESET);
export const preferencesSelectColor = createAction(PREFERENCES_SELECT_COLOR);
export const filterActionList = createAction(FILTER_ACTION_LIST);
export const filterReset = createAction(FILTER_RESET);
export const filterDate = createAction(FILTER_DATE);
export const sortActionList = createAction(SORT_ACTION_LIST);
