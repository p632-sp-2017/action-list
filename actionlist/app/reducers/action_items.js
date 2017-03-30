/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */
import { handleActions } from 'redux-actions';
import { TOGGLE_ITEM, TOGGLE_DRAWER } from '../actions/types';
import { processInstances } from '../lib/commons';

export const defaultState = {
  dataSource: processInstances,
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
  [TOGGLE_ITEM]: toggleItem,
  [TOGGLE_DRAWER]: toggleDrawer,
}, defaultState);

