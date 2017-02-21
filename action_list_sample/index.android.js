/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
    ScrollView,
  View
} from 'react-native';
import Header from './header';
import ActionList from './action_list';
import Panel from './panel';

export default class action_list_sample extends Component {

  render() {
    return (
      <View>
      <Header />
        <ActionList /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#f4f7f9',
    paddingTop      : 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('action_list_sample', () => action_list_sample);