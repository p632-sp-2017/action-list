import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import Header from '../components/header';
import Dropdown from '../components/Dropdown';
import { Colors } from '../lib/commons';

const styles = StyleSheet.create({
  componentContainer: {
    backgroundColor: Colors.Grey,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,

  },
  text: {
    color: Colors.IUCrimson,
    marginLeft: 10,
  },
  preferencesContainer: {
    marginTop: 10,
    backgroundColor: 'grey',
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  preferenceSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 13,
    marginLeft: 20,
    marginRight: 10,
    marginTop: 12,
  },
  preferenceText: {
    fontSize: 15,
  },
  actionButton: {
    fontSize: 15,
    color: '#ffffff',
  },
  preferences_buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between',
  },

  buttonContainer: {
    borderRadius: 8,
    width: 110,
  },
  preferencesButton: {
    borderRadius: 8,
    backgroundColor: Colors.IUCrimsonDark,
    marginRight: 10,
    marginLeft: 10,
    padding: 5,
    fontSize: 15,
    color: '#ffffff',
    height: 30,
    alignItems: 'center',
  },
});

const PreferencesContainer = () => (
  <View>
    <Header />
    <View style={styles.componentContainer}>
      <Text style={styles.preferenceText}>Preferences</Text>
    </View>
    <View style={styles.preferencesContainer}>
      <View style={styles.preferenceSelect}>
        <View>
          <Text style={styles.text}>Saved</Text>
        </View>
        <View>
          <Dropdown option="saved" />
        </View>
      </View>
      <View style={styles.preferenceSelect}>
        <View>
          <Text style={styles.text}>Initiated</Text>
        </View>
        <View>
          <Dropdown option="initiated" />
        </View>
      </View>
      <View style={styles.preferenceSelect}>
        <View>
          <Text style={styles.text}>Disapproved</Text>
        </View>
        <View>
          <Dropdown option="disapproved" />
        </View>
      </View>
      <View style={styles.preferenceSelect}>
        <View>
          <Text style={styles.text}>Enroute</Text>
        </View>
        <View>
          <Dropdown option="enroute" />
        </View>
      </View>
      <View style={styles.preferenceSelect}>
        <View>
          <Text style={styles.text}>Approved</Text>
        </View>
        <View>
          <Dropdown option="approved" />
        </View>
      </View>
      <View style={styles.preferenceSelect}>
        <View>
          <Text style={styles.text}>Final</Text>
        </View>
        <View>
          <Dropdown option="final" />
        </View>
      </View>
      <View style={styles.preferenceSelect}>
        <View>
          <Text style={styles.text}>Processed</Text>
        </View>
        <View>
          <Dropdown option="processed" />
        </View>
      </View>
      <View style={styles.preferenceSelect}>
        <View>
          <Text style={styles.text}>Exception</Text>
        </View>
        <View>
          <Dropdown option="exception" />
        </View>
      </View>
      <View style={styles.preferenceSelect}>
        <View>
          <Text style={styles.text}>Cancel</Text>
        </View>
        <View>
          <Dropdown option="cancel" />
        </View>
      </View>
    </View>
    <View style={styles.preferences_buttons}>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => Actions.home({ type: 'back' })}
          style={styles.preferencesButton}
        >Save</Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => Actions.home({ type: 'back' })}
          style={styles.preferencesButton}
        >Cancel</Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => Actions.home({ type: 'back' })}
          style={styles.preferencesButton}
        >Reset</Button>
      </View>
    </View>
  </View>
);

export default PreferencesContainer;
