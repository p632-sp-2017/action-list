import { createAction } from 'redux-actions';
import { TOGGLE_DRAWER, SORT_ACTION_LIST, FILTER_ACTION_LIST, SELECT_DROPDOWN_OPTION } from './types';

export const toggleDrawer = createAction(TOGGLE_DRAWER);
export const filterActionList = createAction(FILTER_ACTION_LIST);
export const sortActionList = createAction(SORT_ACTION_LIST);
export const selectDropdownOption = createAction(SELECT_DROPDOWN_OPTION);
