import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Button from 'react-native-button';
import ActionItem from './action_item';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f7f9',
    paddingTop: 0,
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

const RenderList = (rowData, rowId) => (
  <View>
    <ScrollView style={styles.container}>
      <ActionItem rowData={rowData} />
    </ScrollView>
  </View>
)

export default RenderList;