/**
 * A react-native mobile appliaction for Actionlists for Indiana University
 * This project is a part of CSCI P632 Course
 * https://github.com/p632-sp-2017/action-list
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './app/reducers/index';
import ActionListContainer from './app/containers/ActionListContainer';

const store = createStore(reducer);

const ActionList = () => (
  <Provider store={store}>
    <ActionListContainer />
  </Provider>
);

AppRegistry.registerComponent('ActionList', () => ActionList);
