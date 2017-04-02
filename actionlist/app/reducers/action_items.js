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
  Object.keys(dataSource).map((key) => {
    const obj = dataSource[key];
    temp[key] = {
      ...obj,
      expanded: false,
    };
    return 0;
  });
  return temp;
};


const toggleItem = (state, action) => {
  let dataS = state.dataSource;
  const oldItem = dataS[action.payload];

  if (!oldItem.expanded) {
    dataS = toggleHelper(dataS);
  }
  const newItem = {
    ...oldItem,
    expanded: !oldItem.expanded,
  };

  return {
    ...state,
    dataSource: {
      ...dataS,
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

