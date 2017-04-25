/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */
import { handleActions } from 'redux-actions';
import { TOGGLE_DRAWER, SORT_ACTION_LIST, FILTER_ACTION_LIST, RESET_FILTERS, SELECT_DROPDOWN_OPTION, RESET_PREFERENCES } from '../actions/types';
import { defaultState, sortTypes, filterStatus } from '../lib/commons';

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

const resetPreferences = (state) => {
  return {
    ...state,
    dropdownColors: {
      ...defaultState.dropdownColors,
    },
  };
};
export default handleActions({
  [TOGGLE_DRAWER]: toggleDrawer,
  [SORT_ACTION_LIST]: sortActionList,
  [FILTER_ACTION_LIST]: filterActionList,
  [SELECT_DROPDOWN_OPTION]: selectDropdownOption,
  [RESET_FILTERS]: resetFilters,
  [RESET_PREFERENCES]: resetPreferences,
}, defaultState);
