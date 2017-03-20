import { handleActions } from 'redux-actions';
import * as types from '../actions/types';

const lib = require('../lib/commons.js');

var list = JSON.parse(lib.getListJSON())

// for (var i=0; i < list.length; i++) {
//   list[i].expanded = false
// }

export const defaultState = {
  dataSource: list,
};

const toggleItem = (state, action) => {
  return {
    ...state,
    state: state
  };
};

export default handleActions({
  [types.TOGGLE_ITEM]: toggleItem,
}, defaultState);