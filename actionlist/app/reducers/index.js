import { combineReducers } from 'redux';
import actionItemsReducer from './action_items';
import sortreducer from './SortReducer';

export default combineReducers({
  actionItemsReducer,
  sortreducer,
});
