/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */
import { handleActions } from 'redux-actions';
import { TOGGLE_ITEM, TOGGLE_DRAWER } from '../actions/types';
import { FILTER_ACTION_LIST } from '../actions/types';
import { processInstances,filterStatus } from '../lib/commons';

export const defaultState = {
  dataSource: processInstances,
  drawerExpanded: false,
  FilterStatus: filterStatus,
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

const toggleDrawer = (state) => {
  return {
    ...state,
    drawerExpanded: !state.drawerExpanded,
  };
};

const filterActionList = (state,action) => {
  const filtereddataSource = defaultState.dataSource;
  const temp = action.payload.filterType;
  defaultState.FilterStatus.temp = action.payload.value;
  console.log( defaultState.FilterStatus.temp);
  // filtereddataSource.filter((actionItem) => {
  //   const filterCriteria = "test";
  //   return
  // });
  // return{
  //   ...state,
  //   dataSource: {
  //     ...filtereddataSource
  //   }

  // }
  console.log(action.payload.value);
  console.log(action.payload.filterType);
}
export default handleActions({
  [TOGGLE_ITEM]: toggleItem,
  [TOGGLE_DRAWER]: toggleDrawer,
  [FILTER_ACTION_LIST]: filterActionList,
}, defaultState);

