/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
<<<<<<< HEAD
=======
/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */

>>>>>>> Sidemenu redux implementation
import { handleActions } from 'redux-actions';
import * as types from '../actions/types';

const lib = require('../lib/commons.js');

const list = lib.getHashJSON();

export const defaultState = {
  dataSource: list,
<<<<<<< HEAD
};

const toggleItem = (state, action) => {
  const dataSource = state.dataSource;
  const oldItem = dataSource[action.payload];
  const newItem = {
    ...oldItem,
    expanded: !oldItem.expanded,
  };

  return {
    ...state,
    dataSource: {
      ...dataSource,
      [action.payload]: newItem,
    },
  };
};

export default handleActions({
  [types.TOGGLE_ITEM]: toggleItem,
}, defaultState);
=======
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


>>>>>>> Sidemenu redux implementation
