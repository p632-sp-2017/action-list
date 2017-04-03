import { createAction } from 'redux-actions';
import { TOGGLE_DRAWER } from './types';

/* eslint-disable import/prefer-default-export */
/* Needs to be done as actions are not dispatched without it.
Will be removed when we have multiple actions */
export const toggleDrawer = createAction(TOGGLE_DRAWER);
/* eslint-enable import/prefer-default-export */
