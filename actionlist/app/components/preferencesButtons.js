import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import { Colors } from '../lib/commons';
import { resetPreferences } from '../actions/actionItems';

const styles = StyleSheet.create({
  preferencesButton: {
    marginTop: 20,
    width: 110,
    backgroundColor: Colors.iuCrimsonDark,
    borderRadius: 8,
    padding: 5,
    fontSize: 15,
    color: Colors.white,
    height: 30,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    justifyContent: 'space-between',
  },
});

const PreferencesButton = ({ onResetPreferences }) => (
  <View style={styles.buttonContainer}>
    <Button
      onPress={() => Actions.home({ type: 'back' })}
      style={styles.preferencesButton}
    >Ok</Button>
    <Button
      onPress={() => onResetPreferences()}
      style={styles.preferencesButton}
    >Reset</Button>
  </View>
);

const mapDispatchToProps = dispatch => ({
  onResetPreferences: () => dispatch(resetPreferences()),
});

PreferencesButton.propTypes = {
  onResetPreferences: React.PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(PreferencesButton);
