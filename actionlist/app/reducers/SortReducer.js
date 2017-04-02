/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */
import { handleActions } from 'redux-actions';
import { SORT_BY_CREATION_DATE } from '../actions/types';
import { processInstances } from '../lib/commons';


export const defaultState = {
  dataSource: processInstances,
};

const toggler = (dataSource) => {
  const temp = {};
  Object.keys(dataSource).forEach((key) => {
    const obj = dataSource[key];
    temp[key] = {
      ...obj,
      title: "Test",
    };
  });
  return temp;
};

const sortByCreationDate = (state) => {
  let dataS = state.dataSource;
  dataS = toggler(state.dataSource);
  return {
    ...state,
    dataSource: {
      ...dataS
    }
  };
};

export default handleActions({
  [SORT_BY_CREATION_DATE]: sortByCreationDate,
}, defaultState);
