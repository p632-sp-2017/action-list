import * as types from './types.js';
import { createAction } from 'redux-actions';

export const set_action_list = createAction(types.SET_ACTION_LIST)
export const expand_item = createAction(types.EXPAND_ITEM)
export const collapse_item = createAction(types.COLLAPSE_ITEM)