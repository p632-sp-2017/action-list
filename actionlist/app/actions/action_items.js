import { createAction } from 'redux-actions';
import { TOGGLE_DRAWER, SORT_BY_CREATION_DATE, SORT_BY_LAST_APPROVED_DATE } from './types';

export const toggleDrawer = createAction(TOGGLE_DRAWER);
export const sortByCreationDate = createAction(SORT_BY_CREATION_DATE);
export const sortByLastApprovedDate = createAction(SORT_BY_LAST_APPROVED_DATE);
// export const sortByProcessType = createAction(SORT_BY_PROCESS_TYPE);
// export const sortByActionRequested = createAction(SORT_BY_ACTION_REQUIRED);
