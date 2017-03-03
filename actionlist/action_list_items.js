import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View,
  ScrollView,
} from 'react-native';
import Button from 'react-native-button';
import Panel from './panel';

const lib = require('./commons.js');

const styles = StyleSheet.create({
  full_container: {
    backgroundColor: '#ffffff',
  },
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
  actionButton: {
    fontSize: 15,
    color: '#ffffff',
  },
  routeButton: {
    fontSize: 15,
    color: '#990000',
  },
  actionContainer: {
    backgroundColor: '#990000',
    padding: 5,
    borderRadius: 8,
    marginLeft: 40,
    width: 100,
  },
  routeContainer: {
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 8,
    borderWidth: 1,
    marginLeft: 50,
    width: 100,
    borderColor: '#990000', 
  },
});

export default class ActionListItems extends Component {

  static routeLog() {
    return true;
  }
  static takeAction() {
    return true;
  }
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(JSON.parse(lib.getListJSON())),
    };
  }

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
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <Button
                containerStyle={styles.routeContainer}
                style={styles.routeButton}
                onPress={this.routeLog}
              >
                Route Log
              </Button>
              <Button
                containerStyle={styles.actionContainer}
                style={styles.actionButton}
                onPress={this.takeAction}
              >
                Take Action
              </Button>
            </View>
          </Panel>
        </ScrollView>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.full_container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderList}
        />
      </View>
    );
  }
}
