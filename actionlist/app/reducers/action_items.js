/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */
import { handleActions } from 'redux-actions';
import { TOGGLE_DRAWER, SORT_ACTION_LIST, FILTER_ACTION_LIST, RESET_FILTERS, SELECT_DROPDOWN_OPTION } from '../actions/types';
import { processInstances, sortTypes, filterStatus, Colors } from '../lib/commons';

export const defaultState = {
  dataSource: processInstances,
  drawerExpanded: false,
  filterStatus,
  optionSelected: '',
  dropdownColors: {
    saved: Colors.White,
    initiated: Colors.White,
    disapproved: Colors.White,
    enroute: Colors.White,
    approved: Colors.White,
    final: Colors.White,
    processed: Colors.White,
    exception: Colors.White,
    cancel: Colors.White,
  },
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

const selectDropdownOption = (state, action) => {
  const newdropdownColors = state.dropdownColors;
  return {
    ...state,
    dropdownColors: {
      ...newdropdownColors,
      [action.payload.option]: action.payload.value,
    },
  };
};

const filterActionList = (state, action) => {
  return {
    ...state,
    filterStatus: {
      ...state.filterStatus,
      [action.payload.filterType]: action.payload.value,
    },
  };
};

const resetFilters = (state) => {
  return {
    ...state,
    filterStatus,
  };
};

export default handleActions({
  [TOGGLE_DRAWER]: toggleDrawer,
  [SORT_ACTION_LIST]: sortActionList,
  [FILTER_ACTION_LIST]: filterActionList,
  [SELECT_DROPDOWN_OPTION]: selectDropdownOption,
  [RESET_FILTERS]: resetFilters,
}, defaultState);
