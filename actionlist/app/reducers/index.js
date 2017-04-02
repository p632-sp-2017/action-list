import { combineReducers } from 'redux';
import actionItemsReducer from './action_items';
import filterReducer from './FilterReducer';

export default combineReducers({
  actionItemsReducer,
  filterReducer,
});
