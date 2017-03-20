import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { ActionCreators } from '../actions';

import {
  AppRegistry,
  View,
} from 'react-native';

import Header from '../components/header';
import DisplayList from '../components/display_list';

const ActionListContainer = () => (
  <View>
    <Header />
    <DisplayList />
  </View>
);

export default ActionListContainer;
