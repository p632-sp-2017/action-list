/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */
import { handleActions } from 'redux-actions';
import { OPEN_DRAWER, CLOSE_DRAWER, SORT_ACTION_LIST,
  FILTER_ACTION_LIST, RESET_FILTERS, SELECT_DROPDOWN_OPTION,
  DATE_FILTER_CHANGE, RESET_PREFERENCES } from '../actions/types';
import { processInstances, sortTypes, filterTypes, filterStatus, preferenceColors } from '../lib/commons';

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


const openDrawer = (state) => {
  return {
    ...state,
    drawerExpanded: true,
  };
};

const closeDrawer = (state) => {
  return {
    ...state,
    drawerExpanded: false,
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
    drawerExpanded: false,
    filterStatus: {
      ...state.filterStatus,
      [action.payload.filterType]: action.payload.value,
    },
  };
};

const resetFilters = (state) => {
  return {
    ...state,
    drawerExpanded: false,
    filterStatus,
  };
};

const dateFilterChange = (state, action) => {
  switch (action.payload.title) {
    case filterTypes.DocumentCreatedDate.title:
      return {
        ...state,
        drawerExpanded: false,
        filterStatus: {
          ...state.filterStatus,
          documentCreationDate: {
            ...state.filterStatus.documentCreationDate,
            [action.payload.position]: action.payload.date,
          },
        },
      };
    case filterTypes.DocumentAssignedDate.title:
      return {
        ...state,
        drawerExpanded: false,
        filterStatus: {
          ...state.filterStatus,
          documentAssignedDate: {
            ...state.filterStatus.documentAssignedDate,
            [action.payload.position]: action.payload.date,
          },
        },
      };
    default:
      return {
        ...state,
      };
  }
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
  [OPEN_DRAWER]: openDrawer,
  [CLOSE_DRAWER]: closeDrawer,
  [SORT_ACTION_LIST]: sortActionList,
  [FILTER_ACTION_LIST]: filterActionList,
  [SELECT_DROPDOWN_OPTION]: selectDropdownOption,
  [RESET_FILTERS]: resetFilters,
  [DATE_FILTER_CHANGE]: dateFilterChange,
  [RESET_PREFERENCES]: resetPreferences,
}, defaultState);
