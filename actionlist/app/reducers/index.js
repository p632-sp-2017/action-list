/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { combineReducers } from 'redux';
import actionItemsReducer from './action_items';


export default combineReducers({
  actionItemsReducer,
});
