/**
 * A react-native mobile appliaction for Actionlists for Indiana University
 * This project is a part of CSCI P632 Course
 * https://github.com/p632-sp-2017/action-list
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import Header from './header';
import ActionListItems from './action_list_items';

const ActionList = () => (
  <View>
    <Header />
    <ActionListItems />
  </View>
);

AppRegistry.registerComponent('ActionList', () => ActionList);
