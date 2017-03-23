import { handleActions } from 'redux-actions';
import * as types from '../actions/types';

const lib = require('../lib/commons.js');

var list = lib.getHashJSON();

export const defaultState = {
  dataSource: list,
};

const toggleItem = (state, action) => {
  const changedObject = action.payload;
  const oldItem = state.dataSource[action.payload];
  var newItem = oldItem;
  if (newItem) {
    newItem.expanded = !newItem.expanded;
  };
  return {
    ...state,
      dataSource: state.dataSource,
        oldItem: newItem,
  };
};

export default handleActions({
  [types.TOGGLE_ITEM]: toggleItem,
}, defaultState);