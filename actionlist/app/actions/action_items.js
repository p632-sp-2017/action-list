import { createAction } from 'redux-actions';
import { TOGGLE_DRAWER, SORT_ACTION_LIST } from './types';

export const toggleDrawer = createAction(TOGGLE_DRAWER);
export const sortActionList = createAction(SORT_ACTION_LIST);
