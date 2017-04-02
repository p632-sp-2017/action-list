/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */
import { handleActions } from 'redux-actions';
import { SORT_BY_CREATION_DATE } from '../actions/types';
import { processInstances } from '../lib/commons';


export const defaultState = {
  dataSource: processInstances,
};

const sortByCreationDate = (state) => {
  return {
    ...state,
  };
};

export default handleActions({
  [SORT_BY_CREATION_DATE]: sortByCreationDate,
}, defaultState);
