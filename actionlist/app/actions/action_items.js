/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { createAction } from 'redux-actions';
import * as types from './types';

export const setActionList = createAction(types.SET_ACTION_LIST);
export const toggleItem = createAction(types.TOGGLE_ITEM);
export const toggleDrawer = createAction(types.TOGGLE_DRAWER);

