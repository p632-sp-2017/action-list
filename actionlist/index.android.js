/**
 * A react-native mobile appliaction for Actionlists for Indiana University
 * This project is a part of CSCI P632 Course
 * https://github.com/p632-sp-2017/action-list
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';

import ActionListItems from './action_list';
import Panel from './panel';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f7f9',
    paddingTop: 30,
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
const Header = require('./header');

const ActionList = () => (
  <View>
    <Header />
    <View>
      <ScrollView style={styles.container}>
        <Panel title="A Panel with short content text">
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Panel>
        <Panel title="A Panel with long content text">
          <ActionListItems />
        </Panel>
        <Panel title="Another Panel">
          <Text>Lorem ipsum dolor sit amet...</Text>
        </Panel>
      </ScrollView>
    </View>
  </View>
);

AppRegistry.registerComponent('ActionList', () => ActionList);
