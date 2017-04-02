/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */
import { handleActions } from 'redux-actions';
import { SORT_BY_CREATE_DATE } from '../actions/types';
import { processInstances } from '../lib/commons';


export const defaultState = {
  dataSource: processInstances,
};



const sortByCreationDate = (state,action) => {
  return {
    ...state,
    drawerExpanded: !state.drawerExpanded,
  };
};


export default handleActions({
  [SORT_BY_CREATE_DATE]: sortByCreationDate,
}, defaultState);
