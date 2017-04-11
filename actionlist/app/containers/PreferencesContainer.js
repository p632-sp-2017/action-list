import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import Header from '../components/header';
import { selectDropdownOption } from '../actions/action_items';

const styles = StyleSheet.create({
  componentContainer: {
    backgroundColor: '#808080',
    marginBottom: 5,
    padding: 10,
    alignItems: 'center',
  },
  preferenceSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  dropdown: {
    width: 150,
    borderStyle: 'solid',
    borderWidth: 1,
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

const PreferencesContainer = ({ onSelectOption, dropdownColors}) => (
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
          style={[styles.dropdown,{backgroundColor: dropdownColors.saved,}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
            <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
            onSelect = {(idx,value) => onSelectOption(idx,value,'saved')}
        >
        </ModalDropdown>
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
          style={[styles.dropdown,{backgroundColor: dropdownColors.initiated}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
            <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
            onSelect = {(idx,value) => onSelectOption(idx,value,'initiated')}
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
          style={[styles.dropdown,{backgroundColor: dropdownColors.disapproved}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
            <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
            onSelect = {(idx,value) => onSelectOption(idx,value,'disapproved')}
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
          style={[styles.dropdown,{backgroundColor: dropdownColors.enroute}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
            <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
            onSelect = {(idx,value) => onSelectOption(idx,value,'enroute')}
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
          style={[styles.dropdown,{backgroundColor: dropdownColors.approved}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
            <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
            onSelect = {(idx,value) => onSelectOption(idx,value,'approved')}
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
          style={[styles.dropdown,{backgroundColor: dropdownColors.final}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
            <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
            onSelect = {(idx,value) => onSelectOption(idx,value,'final')}
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
          style={[styles.dropdown,{backgroundColor: dropdownColors.processed}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
            <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
            onSelect = {(idx,value) => onSelectOption(idx,value,'processed')}
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
          style={[styles.dropdown,{backgroundColor: dropdownColors.exception}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
            <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
            onSelect = {(idx,value) => onSelectOption(idx,value,'exception')}
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
          style={[styles.dropdown,{backgroundColor: dropdownColors.cancel}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
            <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
            onSelect = {(idx,value) => onSelectOption(idx,value,'cancel')}
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

const mapDispatchToProps = dispatch => ({
  onSelectOption: (idx, value, option) => dispatch(selectDropdownOption({"value":value,"option":option,})),
});

const mapStateToProps = state => {
  console.log(state.actionItemsReducer.dropdownColors);
  return {
    dropdownColors: state.actionItemsReducer.dropdownColors,
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(PreferencesContainer);
