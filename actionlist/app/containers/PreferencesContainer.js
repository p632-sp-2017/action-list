import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import Header from '../components/header';

const OPTIONS = [
  'red',
  'white',
  'black',
];

const renderColors = rowData => (
  <View>
    <View style={{ backgroundColor: rowData, flex: 0.3 }} />
    <Text>{rowData}</Text>
  </View>
);

const PreferencesContainer = () => (
  <View>
    <Header />
    <Text>This is Preferences</Text>
    <ModalDropdown options={OPTIONS} renderRow={renderColors} />
    <Button onPress={() => Actions.home({ type: 'back' })} title="Done" />
  </View>
);

export default PreferencesContainer;
