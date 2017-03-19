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
    width: 100,
  },
  routeContainer: {
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#990000',
    marginRight: 10,
    width: 100,
  },
});

const RenderList = (rowData) => (
  <View>
    <ScrollView style={styles.container}>
      <ActionItem title = {rowData.title} >
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
      </ActionItem>
    </ScrollView>
  </View>
)

export default RenderList;