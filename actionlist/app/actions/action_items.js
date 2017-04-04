import { createAction } from 'redux-actions';
import { TOGGLE_DRAWER, TOGGLE_ITEM, FILTER_ACTION_LIST } from './types';

export const toggleItem = createAction(TOGGLE_ITEM);
export const toggleDrawer = createAction(TOGGLE_DRAWER);
export const filterActionList = createAction(FILTER_ACTION_LIST);

