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
    backgroundColor: Colors.IUGray,
    borderBottomWidth: 0.5,
    paddingRight: 10,
    overflow: 'hidden',
  },
  title: {
    flex: 1,
    padding: 10,
    color: Colors.IUCrimson,
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

const ActionItemHeader = (rowData, index, isActive) => (
  <View style={styles.titleContainer}>
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
  rowData: React.PropTypes.shape({
    title: React.PropTypes.string,
  }).isRequired,
};

export default ActionItemHeader;
