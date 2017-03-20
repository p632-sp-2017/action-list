import * as types from './types.js';
import { createAction } from 'redux-actions';

export const set_action_list = createAction(types.SET_ACTION_LIST)
export const toggle_item = createAction(types.TOGGLE_ITEM, id => id)
