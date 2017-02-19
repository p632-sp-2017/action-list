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
        <View>
        <ScrollView style={styles.container}>

          <Panel title="A Panel with short content text">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Panel>

          <Panel title="A Panel with long content text">
           <ActionList />
          </Panel>

          <Panel title="Another Panel">
            <Text>Lorem ipsum dolor sit amet...</Text>
          </Panel>

        </ScrollView>
        </View>  
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