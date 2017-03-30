import { createAction } from 'redux-actions';
import { TOGGLE_ITEM, TOGGLE_DRAWER } from './types';

export const toggleItem = createAction(TOGGLE_ITEM);
export const toggleDrawer = createAction(TOGGLE_DRAWER);

