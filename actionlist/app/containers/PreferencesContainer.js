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
    componentContainer : {
    backgroundColor : '#808080',
    marginTop :10,
    marginBottom: 5,
    padding : 10,
    alignItems: 'center',
  },
  });

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
    
    <View style = {styles.componentContainer}>
     <Text>Preferences</Text>
    </View>
    
    <ModalDropdown options={OPTIONS} renderRow={renderColors} />
    <Button onPress={() => Actions.home({ type: 'back' })} title="Done" />
  </View>
);

export default PreferencesContainer;
