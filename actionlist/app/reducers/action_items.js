/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { handleActions } from 'redux-actions';
import * as types from '../actions/types';

const lib = require('../lib/commons.js');

const list = lib.getHashJSON();

export const defaultState = {
  dataSource: list,
};

const toggleItem = (state, action) => {
  const dataSource = state.dataSource;
  const oldItem = dataSource[action.payload];
  const newItem = {
    ...oldItem,
    expanded: !oldItem.expanded,
  };

  return {
    ...state,
    dataSource: {
      ...dataSource,
      [action.payload]: newItem,
    },
  };
};

export default handleActions({
  [types.TOGGLE_ITEM]: toggleItem,
}, defaultState);
