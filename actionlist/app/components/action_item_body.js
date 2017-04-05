import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Communications from 'react-native-communications';

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


const ActionItemBody = rowData => (
  <View>
    <Text>{rowData.processType.label}</Text>
    <Text>{rowData.initiator}</Text>
    <Text>{rowData.lastApprovedDate}</Text>
    <Text>{rowData.processInstanceStatus.label}</Text>
    <Text>{rowData.actionRequested.label}</Text>
    <View style={styles.bodyView}>
      <Button
        containerStyle={styles.routeContainer}
        style={styles.routeButton}
        onPress={() => Communications.web(rowData._links.log.href)}
        title="Route Log"
      />
      <Button
        containerStyle={styles.actionContainer}
        style={styles.actionButton}
        onPress={() => Communications.web(rowData._links.actionList.href)}
        title="Take Action"
      />
    </View>
  </View>
);

ActionItemBody.propTypes = {
  rowData: React.PropTypes.shape({
    processType: React.PropTypes.shape({
      label: React.PropTypes.string,
    }).isRequired,
    actionRequested: React.PropTypes.shape({
      label: React.PropTypes.string,
    }).isRequired,
    initiator: React.PropTypes.string.isRequired,
    lastApprovedDate: React.PropTypes.string.isRequired,
    processInstanceStatus: React.PropTypes.shape({
      label: React.PropTypes.string,
    }).isRequired,
  }).isRequired,
};

ActionItemBody.defaultProps = {
  rowData: {
    processType: { label: {} },
    actionRequested: { label: {} },
    initiator: '',
    lastApprovedDate: '',
    processInstanceStatus: { label: {} },
  },
};

export default ActionItemBody;
