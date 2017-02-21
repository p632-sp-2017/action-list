import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View,
    ScrollView
} from 'react-native';

import { Button } from 'react-native-elements';

import Panel from './panel';

var lib = require("./commons.js")

export default class ActionList extends Component {
  renderList(rowData) {
    return (
        <View>
        <ScrollView style={styles.container}>
          <Panel title={rowData.title}>
            <Text>{rowData.processType}</Text>
            <Text>{rowData.initiator}</Text>
            <Text>{rowData.lastUpdated}</Text>
            <Text>{rowData.status}</Text>
            <Text>{rowData.actions}</Text>
        <View style={{width: 300, flex: 1,
         flexDirection:'row',}}>    
        <Button
                title='Take Action'  /> 
          
            <Button
                title='Route Log' style={styles.routeButton}/> 
        </View>
          </Panel>
        </ScrollView>
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
        padding: 5
    }
});

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#f4f7f9',
    paddingTop      : 0
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
    actionButton: {
      width: 200,
    },
    routeButton: {
        width: 200,
    },
});