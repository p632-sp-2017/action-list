import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View,
} from 'react-native';

const lib = require('./commons.js');

const style = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    padding: 20,
  },
});

export default class ActionList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(JSON.parse(lib.getListJSON())),
    };
  }

  render() {
    return (
      <View style={style.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => <View>
            <Text>{rowData.id}</Text>
            <Text>{rowData.title}</Text>
            <Text>{rowData.status}</Text>
          </View>
          }
        />
      </View>
    );
  }
}
