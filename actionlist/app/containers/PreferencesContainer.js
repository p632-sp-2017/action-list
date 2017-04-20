import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import Header from '../components/header';
import PreferencesButton from '../components/PreferencesButton';
import Dropdown from '../components/Dropdown';
import { Colors, documentStatuses } from '../lib/commons';

const styles = StyleSheet.create({
  componentContainer: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: Colors.IUCrimson,
    marginLeft: 10,
  },
  container: {
    backgroundColor: '#EDEBEB',
    padding: 10,
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
    fontSize: 20,
    color: Colors.IUCrimsonDark,
  },
  actionButton: {
    fontSize: 15,
    color: '#ffffff',
  },
  preferences_buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    justifyContent: 'space-between',
  },
});

const renderStatus = ({ documentStatus, i }) => (
  <View key={i} style={styles.preferenceSelect}>
    <View>
      <Text style={styles.text}>{documentStatus}</Text>
    </View>
    <View>
      <Dropdown option={documentStatus} />
    </View>
  </View>
);

const PreferencesContainer = () => (
  <ScrollView>
    <Header displayMenu={false} />
    <View style={styles.componentContainer}>
      <Text style={styles.preferenceText}>Preferences</Text>
    </View>
    <View style={styles.container}>{
      documentStatuses.map((documentStatus, i) => renderStatus({ documentStatus, i }))
    }
    </View>
    <View style={styles.preferences_buttons}>
      <PreferencesButton buttonName="Save" />
      <PreferencesButton buttonName="Cancel" />
      <PreferencesButton buttonName="Back" />
    </View>
  </ScrollView>
);

renderStatus.propTypes = {
  documentStatus: React.PropTypes.string.isRequired,
  i: React.PropTypes.number.isRequired,
};

export default PreferencesContainer;
