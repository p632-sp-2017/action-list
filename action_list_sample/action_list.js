import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View
} from 'react-native';

var lib = require("./commons.js")

export default class ActionList extends Component {
  renderList(rowData) {
    return (
      <View>
      <Text> {rowData.id} <Text>{rowData.title}</Text> <Text>{rowData.status}</Text> </Text>
      </View>
    );
  }
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(JSON.parse(lib.getListJSON()))
    };
  }
  render() {
      return (
        <View style={style.container}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderList}
            />
        </View>
      )
  }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff"
    },

    text: {
        color: "black",
        textAlign: "center",
        fontSize: 18,
        padding: 20
    }
});