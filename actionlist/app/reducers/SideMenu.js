import { handleActions } from 'redux-actions';
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const handleMenupress = (state, action) => {
  return {
    
    active: !state.active 
  };
};
export default handleActions({
  [types.MENUPRESS_ACTION]: handleMenupress
}, false);