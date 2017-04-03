/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */
import { handleActions } from 'redux-actions';
import { FILTER_BY_DOCUMENT_ROUTE_STATUS, FILTER_BY_ACTION_REQUESTED, FILTER_BY_DOCUMENT_TYPE, FILTER_BY_DOCUMENT_CREATION_DATE, FILTER_BY_DOCUMENT_ASSIGNED_DATE } from '../actions/types';
import { processInstances } from '../lib/commons';


export const defaultState = {
  dataSource: processInstances,
};

const filterByDocumentRouteStatus = (state) => {
  return {
    ...state,
  };
};

const filterByActionRequested = (state) => {
  return {
    ...state,
  };
};

const filterByDocumentType = (state) => {
  return {
    ...state,
  };
};

const filterByDocumentCreationDate = (state) => {
  return {
    ...state,
  };
};

const filterByDocumentAssignedDate = (state) => {
  return {
    ...state,
  };
};

export default handleActions({
  [FILTER_BY_DOCUMENT_ROUTE_STATUS]: filterByDocumentRouteStatus,
  [FILTER_BY_ACTION_REQUESTED]: filterByActionRequested,
  [FILTER_BY_DOCUMENT_TYPE]: filterByDocumentType,
  [FILTER_BY_DOCUMENT_CREATION_DATE]: filterByDocumentCreationDate,
  [FILTER_BY_DOCUMENT_ASSIGNED_DATE]: filterByDocumentAssignedDate,
}, defaultState);
