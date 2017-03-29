import * as types from './types.js';
import { createAction } from 'redux-actions';

export const setActionList = createAction(types.SET_ACTION_LIST);
export const toggleItem = createAction(types.TOGGLE_ITEM);
export const toggleDrawer = createAction(types.TOGGLE_DRAWER);
