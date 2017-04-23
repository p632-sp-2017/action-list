import { createAction } from 'redux-actions';
import { TOGGLE_DRAWER, SORT_ACTION_LIST, FILTER_ACTION_LIST, RESET_FILTERS, SELECT_DROPDOWN_OPTION, RESET_PREFERENCES } from './types';

export const toggleDrawer = createAction(TOGGLE_DRAWER);
export const filterActionList = createAction(FILTER_ACTION_LIST);
export const sortActionList = createAction(SORT_ACTION_LIST);
export const selectDropdownOption = createAction(SELECT_DROPDOWN_OPTION);
export const resetFilters = createAction(RESET_FILTERS);
export const resetPreferences = createAction(RESET_PREFERENCES);
