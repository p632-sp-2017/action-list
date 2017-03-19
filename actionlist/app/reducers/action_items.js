import { handleActions } from 'redux-actions';
import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

const lib = require('../lib/commons.js');

export const defaultState = {
  dataSource: lib.getListJSON(),
};

export const expandItem = createReducer({}, {
  expanded: true,
});

export const collapseItem = createReducer({}, {
  expanded: false,
});

export default handleActions({
  [types.EXPAND_ITEM]: expandItem,
  [types.COLLAPSE_ITEM]: collapseItem,
}, defaultState);