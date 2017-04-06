/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */
import { handleActions } from 'redux-actions';
<<<<<<< HEAD
import { TOGGLE_ITEM, TOGGLE_DRAWER } from '../actions/types';
import { FILTER_ACTION_LIST } from '../actions/types';
import { processInstances,filterStatus } from '../lib/commons';
=======
import { TOGGLE_DRAWER, SORT_ACTION_LIST } from '../actions/types';
import { processInstances, sortTypes } from '../lib/commons';
>>>>>>> develop

export const defaultState = {
  dataSource: processInstances,
  drawerExpanded: false,
<<<<<<< HEAD
  FilterStatus: filterStatus,
};



const toggleItem = (state, action) => {
  const dataSource = state.dataSource;
  const oldItem = dataSource[action.payload];
  const newItem = {
    ...oldItem,
    expanded: !oldItem.expanded,
  };
=======
  optionSelected: '',
};

const sortActionList = (state, action) => {
  const sortedByCriteria = [...state.dataSource];
  switch (action.payload) {
    case sortTypes.creationDate:
      sortedByCriteria.sort((a, b) => {
        const c = new Date(a.creationDate);
        const d = new Date(b.creationDate);
        return c - d;
      });
      break;
    case sortTypes.lastApprovedDate:
      sortedByCriteria.sort((a, b) => {
        const c = new Date(a.lastApprovedDate);
        const d = new Date(b.lastApprovedDate);
        return c - d;
      });
      break;
    case sortTypes.processType:
      sortedByCriteria.sort((a, b) => {
        const processA = a.processType.label.toUpperCase();
        const processB = b.processType.label.toUpperCase();
        if (processA < processB) {
          return -1;
        }
        if (processA > processB) {
          return 1;
        }
        return 0;
      });
      break;
    case sortTypes.actionRequested:
      sortedByCriteria.sort((a, b) => {
        const processA = a.actionRequested.label.toUpperCase();
        const processB = b.actionRequested.label.toUpperCase();
        if (processA < processB) {
          return -1;
        }
        if (processA > processB) {
          return 1;
        }
        return 0;
      });
      break;
    default:
      break;
  }
>>>>>>> develop
  return {
    ...state,
    dataSource: [
      ...sortedByCriteria,
    ],
    optionSelected: action.payload,
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
  [TOGGLE_DRAWER]: toggleDrawer,
<<<<<<< HEAD
  [FILTER_ACTION_LIST]: filterActionList,
=======
  [SORT_ACTION_LIST]: sortActionList,
>>>>>>> develop
}, defaultState);
