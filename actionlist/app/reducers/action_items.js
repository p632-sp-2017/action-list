/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */
import { handleActions } from 'redux-actions';
import { TOGGLE_ITEM, TOGGLE_DRAWER } from '../actions/types';
import { processInstances } from '../lib/commons';

export const defaultState = {
  dataSource: processInstances,
  drawerExpanded: false,
};

// ToggleHelper to toggleback already opened card when other card is clicked
const toggleHelper = (dataSource) => {
  const temp = {};
  Object.keys(dataSource).forEach((key) => {
    const val = dataSource[key];
    val.expanded = false;
    temp[key] = val;
  });
  return temp;
};

const toggleItem = (state, action) => {
  let dataSource = state.dataSource;
  const oldItem = dataSource[action.payload];
  if (!oldItem.expanded) {
    dataSource = toggleHelper(dataSource);
  }

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

