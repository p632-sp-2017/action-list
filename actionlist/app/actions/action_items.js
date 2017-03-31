import { createAction } from 'redux-actions';
import { TOGGLE_DRAWER, TOGGLE_ITEM } from './types';

export const toggleItem = createAction(TOGGLE_ITEM);
export const toggleDrawer = createAction(TOGGLE_DRAWER);

