/**
 * A react-native mobile appliaction for Actionlists for Indiana University
 * This project is a part of CSCI P632 Course
 * https://github.com/p632-sp-2017/action-list
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import Header from './header';

const ActionList = () => (
  <Header />
);

AppRegistry.registerComponent('ActionList', () => ActionList);
