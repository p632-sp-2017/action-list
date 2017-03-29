/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */

import { handleActions } from 'redux-actions';
import * as types from '../actions/types';

const lib = require('../lib/commons.js');

const list = lib.getHashJSON();

export const defaultState = {
  dataSource: list,
  drawerExpanded: false,
};

const toggleItem = (state, action) => {
  const oldItem = state.dataSource[action.payload];
  const newItem = oldItem;
  if (newItem) {
    newItem.expanded = !newItem.expanded;
  }
  return {
    ...state,
    dataSource: state.dataSource,
    oldItem: newItem,
  };
};
const toggleDrawer = (state) => {
  return {
    ...state,
    drawerExpanded: !state.drawerExpanded,
  };
};
export default handleActions({
  [types.TOGGLE_ITEM]: toggleItem,
  [types.TOGGLE_DRAWER]: toggleDrawer,
}, defaultState);


