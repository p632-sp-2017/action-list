import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import Header from '../components/header';

const styles = StyleSheet.create({
  componentContainer: {
    backgroundColor: '#808080',
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    alignItems: 'center',
  },
  preferenceSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  actionButton: {
    fontSize: 15,
    color: '#ffffff',
  },
  preferences_buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },

  buttonContainer: {
    backgroundColor: '#808080',
    borderRadius: 8,
    marginLeft: 10,
    width: 100,
  },
});

const OPTIONS = [
  'aqua',
  'blue',
  'green',
  'orange',
  'pink',
  'purple',
  'red',
  'grey',
  'tan',
  'white',
];

const PreferencesContainer = () => (
  <View>
    <Header />
    <View style={styles.componentContainer}>
      <Text>Preferences</Text>
    </View>

    <View style={styles.preferenceSelect}>
      <View>
        <Text>Saved</Text>
      </View>
      {/* Disabled Following ES-Lint rule
        It is corrected in latest version which is still in beta */}
      <View>
        <ModalDropdown
          options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
            <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
        />
      </View>
    </View>
    <View style={styles.preferenceSelect}>
      <View>
        <Text>Initiated</Text>
      </View>
      {/* Disabled Following ES-Lint rule
        It is corrected in latest version which is still in beta */}
      <View>
        <ModalDropdown
          options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
            <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
        />
      </View>
    </View>
    <View style={styles.preferenceSelect}>
      <View>
        <Text>Disapproved</Text>
      </View>
      {/* Disabled Following ES-Lint rule
        It is corrected in latest version which is still in beta */}		
      <View>
        <ModalDropdown
          options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
            <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
        />
      </View>
    </View>
    <View style={styles.preferenceSelect}>
      <View>
        <Text>Enroute</Text>
      </View>
      {/* Disabled Following ES-Lint rule
        It is corrected in latest version which is still in beta */}
      <View>
        <ModalDropdown
          options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
            <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
        />
      </View>
    </View>
    <View style={styles.preferenceSelect}>
      <View>
        <Text>Approved</Text>
      </View>
      {/* Disabled Following ES-Lint rule
        It is corrected in latest version which is still in beta */}
      <View>
        <ModalDropdown
          options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
            <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
        />
      </View>
    </View>
    <View style={styles.preferenceSelect}>
      <View>
        <Text>Final</Text>
      </View>
      {/* Disabled Following ES-Lint rule
        It is corrected in latest version which is still in beta */}
      <View>
        <ModalDropdown
          options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
            <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
        />
      </View>
    </View>
    <View style={styles.preferenceSelect}>
      <View>
        <Text>Processed</Text>
      </View>
      {/* Disabled Following ES-Lint rule
        It is corrected in latest version which is still in beta */}
      <View>
        <ModalDropdown
          options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
            <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
        />
      </View>
    </View>
    <View style={styles.preferenceSelect}>
      <View>
        <Text>Exception</Text>
      </View>
      {/* Disabled Following ES-Lint rule
        It is corrected in latest version which is still in beta */}
      <View>
        <ModalDropdown
          options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
            <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
        />
      </View>
    </View>
    <View style={styles.preferenceSelect}>
      <View>
        <Text>Cancel</Text>
      </View>
      {/* Disabled Following ES-Lint rule
        It is corrected in latest version which is still in beta */}
      <View>
        <ModalDropdown
          options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
            <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
        />
      </View>
    </View>
    <View style={styles.preferences_buttons}>
      <View style={styles.buttonContainer}>
        <Button onPress={() => Actions.home({ type: 'back' })} title="Save" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => Actions.home({ type: 'back' })} title="Cancel" />
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={() => Actions.home({ type: 'back' })} title="Reset" />
      </View>
    </View>
  </View>
);

export default PreferencesContainer;
