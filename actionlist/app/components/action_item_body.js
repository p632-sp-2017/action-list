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
  bodyView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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

const routeLog = () => ({});

const takeAction = () => ({});

const ActionItemBody = ({ actions, initiator, lastUpdated, processType, status }) => (
  <View>
    <Text>{processType}</Text>
    <Text>{initiator}</Text>
    <Text>{lastUpdated}</Text>
    <Text>{status}</Text>
    <Text>{actions}</Text>
    <View style={styles.bodyView}>
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

ActionItemBody.propTypes = {
  processType: React.PropTypes.string.isRequired,
  actions: React.PropTypes.string.isRequired,
  initiator: React.PropTypes.string.isRequired,
  lastUpdated: React.PropTypes.string.isRequired,
  status: React.PropTypes.string.isRequired,
};

ActionItemBody.defaultProps = {
  processType: '',
  actions: '',
  initiator: '',
  lastUpdated: '',
  status: '',
};
