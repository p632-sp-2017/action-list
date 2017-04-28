import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Button from 'react-native-button';
import Communications from 'react-native-communications';
import { Colors } from '../lib/commons';
import TextRow from './textRow';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.iuDarkLimeStone,
    padding: 12,
    borderBottomWidth: 0.5,
  },
  actionContainer: {
    flex: 1,
    backgroundColor: Colors.iuCrimsonDark,
    padding: 5,
    borderRadius: 4,
    marginRight: 10,
    marginTop: 10,
    width: 50,
  },
  bodyView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  routeContainer: {
    backgroundColor: Colors.iuCrimsonDark,
    padding: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.iuCrimsonDark,
    marginRight: 10,
    width: 100,
  },
  actionButton: {
    fontSize: 15,
    color: Colors.white,
  },
  routeButton: {
    backgroundColor: Colors.iuCrimsonDark,
    fontSize: 15,
    color: Colors.iuCrimsonDark,
  },
});

const ActionItemBody = rowData => (
  <View style={styles.container}>
    <TextRow title={'Document Type'} data={rowData.processType.label} />
    <TextRow title={'Initiator'} data={rowData.initiator} />
    <TextRow title={'Date Created'} data={rowData.creationDate} />
    <TextRow title={'Document Route Status'} data={rowData.processInstanceStatus.label} />
    <TextRow title={'Action Requested'} data={rowData.actionRequested.label} />
    <View style={styles.bodyView}>
      <Button
        containerStyle={styles.actionContainer}
        style={styles.actionButton}
        onPress={() => Communications.web(rowData._links.log.href)}
      >Route Log</Button>
      <Button
        containerStyle={styles.actionContainer}
        style={styles.actionButton}
        onPress={() => Communications.web(rowData._links.actionList.href)}
      >Take Action</Button>
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
