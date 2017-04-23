import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import { Colors } from '../lib/commons';

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    borderRadius: 8,
    width: 110,
  },
  preferencesButton: {
    borderRadius: 8,
    backgroundColor: Colors.iuCrimsonDark,
    marginRight: 10,
    marginLeft: 10,
    padding: 5,
    fontSize: 15,
    color: Colors.white,
    height: 30,
    alignItems: 'center',
  },
});

const PreferencesButton = ({ buttonName }) => (
  <View style={styles.buttonContainer}>
    <Button
      onPress={() => Actions.home({ type: 'back' })}
      style={styles.preferencesButton}
    >{buttonName}</Button>
  </View>
);

PreferencesButton.propTypes = {
  buttonName: React.PropTypes.string.isRequired,
};

export default PreferencesButton;
