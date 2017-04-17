import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Header from '../components/header';
import PreferencesButton from '../components/PreferencesButton';
import Dropdown from '../components/Dropdown';
import { Colors, documentStatuses } from '../lib/commons';

const styles = StyleSheet.create({
  componentContainer: {
    backgroundColor: Colors.IULimeStone,
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
    backgroundColor: Colors.IULimeStone,
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
});

const PreferencesContainer = () => (
  <View>
    <Header />
    <View style={styles.componentContainer}>
      <Text style={styles.preferenceText}>Preferences</Text>
    </View>
    <View>{
      documentStatuses.map(documentStatus => (
        <View style={styles.preferenceSelect}>
          <View>
            <Text style={styles.text}>{camelCase(documentStatus)}</Text>
          </View>
          <View>
            <Dropdown option={camelCase(documentStatus)} />
          </View>
        </View>
        ))}
    </View>
    <View style={styles.preferences_buttons}>
      <PreferencesButton buttonName="Save" />
      <PreferencesButton buttonName="Cancel" />
      <PreferencesButton buttonName="Back" />
    </View>
  </View>
);

export default PreferencesContainer;
