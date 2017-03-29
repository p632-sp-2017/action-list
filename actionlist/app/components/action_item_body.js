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

const ActionItemBody = ({ actionRequested,
  initiator,
  lastApprovedDate,
  processType,
  processInstanceStatus }) => (
    <View>
      <Text>{processType.label}</Text>
      <Text>{initiator}</Text>
      <Text>{lastApprovedDate}</Text>
      <Text>{processInstanceStatus.label}</Text>
      <Text>{actionRequested.label}</Text>
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
  processType: React.PropTypes.shape({
    label: {},
  }),
  actionRequested: React.PropTypes.shape({
    label: {},
  }),
  initiator: React.PropTypes.string.isRequired,
  lastApprovedDate: React.PropTypes.string.isRequired,
  processInstanceStatus: React.PropTypes.shape({
    label: {},
  }),
};

ActionItemBody.defaultProps = {
  processType: { label: {} },
  actionRequested: { label: {} },
  initiator: '',
  lastApprovedDate: '',
  processInstanceStatus: { label: {} },
  rowData: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

