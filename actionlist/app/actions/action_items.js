import { createAction } from 'redux-actions';
import { TOGGLE_DRAWER, TOGGLE_ITEM, FILTER_BY_DOCUMENT_ROUTE_STATUS, FILTER_BY_ACTION_REQUESTED , FILTER_BY_DOCUMENT_TYPE, FILTER_BY_DOCUMENT_CREATION_DATE, FILTER_BY_DOCUMENT_ASSIGNED_DATE } from './types';

export const toggleItem = createAction(TOGGLE_ITEM);
export const toggleDrawer = createAction(TOGGLE_DRAWER);
export const filterByDocumentRouteStatus = createAction(FILTER_BY_DOCUMENT_ROUTE_STATUS);
export const filterByActionRequested = createAction(FILTER_BY_ACTION_REQUESTED);
export const filterByDocumentType = createAction(FILTER_BY_DOCUMENT_TYPE);
export const filterByDocumentCreationDate = createAction(FILTER_BY_DOCUMENT_CREATION_DATE);
export const filterByDocumentAssignedDate = createAction(FILTER_BY_DOCUMENT_ASSIGNED_DATE);
