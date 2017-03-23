import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
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
  actionButton: {
    fontSize: 15,
    color: '#ffffff',
  },
  routeButton: {
    fontSize: 15,
    color: '#990000',
  },
});

const routeLog = () => {
  return null;
};

const takeAction = () => {
  return null;
}

const ActionItemBody = (rowData) => (
  <View>
    <Text>{rowData.processType}</Text>
    <Text>{rowData.initiator}</Text>
    <Text>{rowData.lastUpdated}</Text>
    <Text>{rowData.status}</Text>
    <Text>{rowData.actions}</Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <Button
        containerStyle={styles.routeContainer}
        style={styles.routeButton}
        onPress={routeLog}
        title="Route Log"
      />
      <Button
        containerStyle={styles.actionContainer}
        style={styles.actionButton}
        onPress={takeAction}
        title="Take Action"
      />
    </View>
  </View>
);

export default ActionItemBody;