/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */
import { handleActions } from 'redux-actions';
import { TOGGLE_DRAWER, SORT_BY_CREATION_DATE, SORT_BY_LAST_APPROVED_DATE, SORT_BY_PROCESS_TYPE, SORT_BY_ACTION_REQUIRED } from '../actions/types';
import { processInstances } from '../lib/commons';

export const defaultState = {
  dataSource: processInstances,
  drawerExpanded: false,
  sort_value: '',
};

const sortByCreationDate = (state) => {
  const sortedByCreationDate = [...state.dataSource];

  sortedByCreationDate.sort((a, b) => {
    const c = new Date(a.creationDate);
    const d = new Date(b.creationDate);
    return c - d;
  });
  return {
    ...state,
    dataSource: [
      ...sortedByCreationDate,
    ],
    sortValue: 'CreationDate',
  };
};

const sortByLastApprovedDate = (state) => {
  const sortedByLastApproved = [...state.dataSource];
  sortedByLastApproved.sort((a, b) => {
    const c = new Date(a.lastApprovedDate);
    const d = new Date(b.lastApprovedDate);
    return c - d;
  });
  return {
    ...state,
    dataSource: [
      ...sortedByLastApproved,
    ],
    sortValue: 'ApprovedDate',
  };
};

const sortByProcessType = (state) => {
  const sortedByProcessType = [...state.dataSource];
  sortedByProcessType.sort((a, b) => {
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

  return {
    ...state,
    dataSource: [
      ...sortedByProcessType,
    ],
    sortValue: 'ProcessType',
  };
};

const sortByActionRequested = (state) => {
  const sortedByActionRequested = [...state.dataSource];
  sortedByActionRequested.sort((a, b) => {
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
  return {
    ...state,
    dataSource: [
      ...sortedByActionRequested,
    ],
    sortValue: 'ActionRequested',
  };
};


const toggleDrawer = (state) => {
  return {
    ...state,
    drawerExpanded: !state.drawerExpanded,
  };
};

export default handleActions({
  [TOGGLE_DRAWER]: toggleDrawer,
  [SORT_BY_CREATION_DATE]: sortByCreationDate,
  [SORT_BY_LAST_APPROVED_DATE]: sortByLastApprovedDate,
  [SORT_BY_PROCESS_TYPE]: sortByProcessType,
  [SORT_BY_ACTION_REQUIRED]: sortByActionRequested,
}, defaultState);
