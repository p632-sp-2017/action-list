/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */
import { handleActions } from 'redux-actions';
import { PREFERENCES_DRAWER_OPEN, PREFERENCES_DRAWER_CLOSE, SORT_ACTION_LIST,
  FILTER_ACTION_LIST, FILTER_RESET, PREFERENCES_SELECT_COLOR,
  FILTER_DATE, PREFERENCES_RESET } from '../actions/types';
import { processInstances, sortTypes, filterStatus, preferenceColors } from '../lib/commons';

export const defaultState = {
  dataSource: processInstances,
  drawerExpanded: false,
  filterStatus,
  optionSelected: '',
  dropdownColors: {
    Saved: preferenceColors.white,
    Initiated: preferenceColors.white,
    Disapproved: preferenceColors.white,
    Enroute: preferenceColors.white,
    Approved: preferenceColors.white,
    Final: preferenceColors.white,
    Processed: preferenceColors.white,
    Exception: preferenceColors.white,
    Cancel: preferenceColors.white,
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
    drawerExpanded: false,
    dataSource: [
      ...sortedByCriteria,
    ],
    optionSelected: action.payload,
  };
};


const preferencesDrawerOpen = (state) => {
  return {
    ...state,
    drawerExpanded: true,
  };
};

const preferencesDrawerClose = (state) => {
  return {
    ...state,
    drawerExpanded: false,
  };
};

const preferencesReset = (state) => {
  return {
    ...state,
    dropdownColors: {
      ...defaultState.dropdownColors,
    },
  };
};

const preferencesSelectColor = (state, action) => {
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
    drawerExpanded: false,
    filterStatus: {
      ...state.filterStatus,
      [action.payload.filterType]: action.payload.value,
    },
  };
};

const filterReset = (state) => {
  return {
    ...state,
    drawerExpanded: false,
    filterStatus,
  };
};

const filterDate = (state, action) => {
  return {
    ...state,
    drawerExpanded: false,
    filterStatus: {
      ...state.filterStatus,
      [action.payload.type]: {
        ...state.filterStatus[action.payload.type],
        [action.payload.position]: action.payload.date,
      },
    },
  };
};

export default handleActions({
  [PREFERENCES_DRAWER_OPEN]: preferencesDrawerOpen,
  [PREFERENCES_DRAWER_CLOSE]: preferencesDrawerClose,
  [PREFERENCES_RESET]: preferencesReset,
  [PREFERENCES_SELECT_COLOR]: preferencesSelectColor,
  [FILTER_ACTION_LIST]: filterActionList,
  [FILTER_RESET]: filterReset,
  [FILTER_DATE]: filterDate,
  [SORT_ACTION_LIST]: sortActionList,
}, defaultState);
