import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { Colors } from '../lib/commons';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.iuGray,
    borderBottomWidth: 0.5,
    paddingRight: 10,
    overflow: 'hidden',
  },
  preferencesStub: {
    width: 10,
    height: 40,
    borderRightWidth: 0.5,
  },
  title: {
    flex: 1,
    padding: 10,
    color: Colors.iuCrimson,
    fontWeight: 'bold',
  },
  buttonImage: {
    marginTop: 10,
    width: 20,
    height: 20,
  },
  body: {
    padding: 10,
    paddingTop: 0,
  },
});

const icons = {
  /* eslint-disable global-require */
  /* rule disabled since image loading need not be global */
  up: require('./img/up-icon.png'),
  down: require('./img/down-icon.png'),
  /* eslint-enable global-require */
};

const ActionItemHeader = ({ rowData, index, isActive, dropdownColors }) => (
  <View key={index} style={styles.titleContainer}>
    <View
      style={[
        styles.preferencesStub,
        { backgroundColor: dropdownColors[rowData.processInstanceStatus.label] },
      ]}
    />
    <Text style={styles.title}>
      {rowData.title}
    </Text>
    <Image
      style={styles.buttonImage}
      source={isActive ? icons.up : icons.down}
    />
  </View>
);

ActionItemHeader.propTypes = {
  dropdownColors: React.PropTypes.shape({
    Saved: React.PropTypes.string,
    Initiated: React.PropTypes.string,
    Disapproved: React.PropTypes.string,
    Enroute: React.PropTypes.string,
    Approved: React.PropTypes.string,
    Final: React.PropTypes.string,
    Processed: React.PropTypes.string,
    Exception: React.PropTypes.string,
    Cancel: React.PropTypes.string,
  }).isRequired,
  index: React.PropTypes.number.isRequired,
  isActive: React.PropTypes.bool.isRequired,
  rowData: React.PropTypes.shape({
    title: React.PropTypes.string,
  }).isRequired,
};

export default ActionItemHeader;
