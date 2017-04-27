import { createAction } from 'redux-actions';
import { OPEN_DRAWER, CLOSE_DRAWER, SORT_ACTION_LIST,
  FILTER_ACTION_LIST, RESET_FILTERS, SELECT_DROPDOWN_OPTION,
  DATE_FILTER_CHANGE, RESET_PREFERENCES } from './types';

export const openDrawer = createAction(OPEN_DRAWER);
export const closeDrawer = createAction(CLOSE_DRAWER);
export const filterActionList = createAction(FILTER_ACTION_LIST);
export const sortActionList = createAction(SORT_ACTION_LIST);
export const selectDropdownOption = createAction(SELECT_DROPDOWN_OPTION);
export const resetFilters = createAction(RESET_FILTERS);
export const dateFilterChange = createAction(DATE_FILTER_CHANGE);
export const resetPreferences = createAction(RESET_PREFERENCES);
