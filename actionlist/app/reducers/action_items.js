/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */
import { handleActions } from 'redux-actions';
import { TOGGLE_DRAWER, SORT_BY_CREATION_DATE, SORT_BY_LAST_APPROVED_DATE } from '../actions/types';
import { processInstances } from '../lib/commons';

export const defaultState = {
  dataSource: processInstances,
  drawerExpanded: false,
};

const sortByCreationDate = (state) => {
  const sortedDateByCreationDate = state.dataSource;
  sortedDateByCreationDate.sort((a, b) => {
    const c = new Date(a.creationDate);
    const d = new Date(b.creationDate);
    return c - d;
  });
  return {
    ...state,
    dataSource: [
      ...sortedDateByCreationDate,
    ],
  };
};

const sortByLastApprovedDate = (state) => {
  const sortedDateByLastApproved = state.dataSource;
  sortedDateByLastApproved.sort((a, b) => {
    const c = new Date(a.lastApprovedDate);
    const d = new Date(b.lastApprovedDate);
    return c - d;
  });
  return {
    ...state,
    dataSource: [
      ...sortedDateByLastApproved,
    ],
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
}, defaultState);
