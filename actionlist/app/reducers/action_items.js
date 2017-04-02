/* eslint arrow-body-style: ["error", "as-needed", { "requireReturnForObjectLiteral": true }] */
import { handleActions } from 'redux-actions';
import { TOGGLE_DRAWER } from '../actions/types';
import { processInstances } from '../lib/commons';

export const defaultState = {
  dataSource: processInstances,
  drawerExpanded: false,
};

const toggleDrawer = (state) => {
  return {
    ...state,
    drawerExpanded: !state.drawerExpanded,
  };
};

export default handleActions({
  [TOGGLE_DRAWER]: toggleDrawer,
}, defaultState);

