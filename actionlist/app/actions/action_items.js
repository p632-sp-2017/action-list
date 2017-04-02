import { createAction } from 'redux-actions';
import { TOGGLE_DRAWER, TOGGLE_ITEM, SORT_BY_CREATION_DATE } from './types';

export const toggleItem = createAction(TOGGLE_ITEM);
export const toggleDrawer = createAction(TOGGLE_DRAWER);
export const sortByCreationDate = createAction(SORT_BY_CREATION_DATE);
export const sortByLastUpdatedDate = createAction(SORT_BY_LAST_UPDATED_DATE);
export const sortByProcessType = createAction(SORT_BY_PROCESS_TYPE);
export const sortByActionRequested = createAction(SORT_BY_ACTION_REQUIRED);