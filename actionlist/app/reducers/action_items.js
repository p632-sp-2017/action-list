import { handleActions } from 'redux-actions';
import { TOGGLE_ITEM } from '../actions/types';
import { processInstances } from '../lib/commons';

export const defaultState = {
  dataSource: processInstances,
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
  [TOGGLE_ITEM]: toggleItem,
}, defaultState);
