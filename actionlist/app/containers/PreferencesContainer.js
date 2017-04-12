import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import Header from '../components/header';
import { selectDropdownOption } from '../actions/action_items';
import { Colors } from '../lib/commons';

const styles = StyleSheet.create({
  componentContainer: {
    backgroundColor: '#808080',
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
  dropdown: {
    width: 150,
    borderStyle: 'solid',
    borderWidth: 1,
    marginRight: 30,
  },
  preferencesButton: {
    borderRadius: 8,
    backgroundColor: '#990000',
    marginRight: 10,
    marginLeft: 10,
    padding: 5,
    fontSize: 15,
    color: '#ffffff',
    height: 30,
    alignItems: 'center',
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

const PreferencesContainer = ({ onSelectOption, dropdownColors }) => (
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
        {/* Disabled Following ES-Lint rule
          It is corrected in latest version which is still in beta */}
        <View>
          <ModalDropdown
            style={[styles.dropdown,{backgroundColor: dropdownColors.saved,}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
              <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
            onSelect={(idx, value) => onSelectOption(idx, value, 'saved')}
          />
        </View>
      </View>
      <View style={styles.preferenceSelect}>
        <View>
          <Text style={styles.text}>Initiated</Text>
        </View>
        {/* Disabled Following ES-Lint rule
          It is corrected in latest version which is still in beta */}
        <View>
          <ModalDropdown
            style={[styles.dropdown,{backgroundColor: dropdownColors.initiated}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
              <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
            onSelect={(idx, value) => onSelectOption(idx, value, 'initiated')}
          />
        </View>
      </View>
      <View style={styles.preferenceSelect}>
        <View>
          <Text style={styles.text}>Disapproved</Text>
        </View>
        {/* Disabled Following ES-Lint rule
          It is corrected in latest version which is still in beta */}
        <View>
          <ModalDropdown
            style={[styles.dropdown,{backgroundColor: dropdownColors.disapproved}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
              <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
            onSelect={(idx, value) => onSelectOption(idx, value, 'disapproved')}
          />
        </View>
      </View>
      <View style={styles.preferenceSelect}>
        <View>
          <Text style={styles.text}>Enroute</Text>
        </View>
        {/* Disabled Following ES-Lint rule
          It is corrected in latest version which is still in beta */}
        <View>
          <ModalDropdown
            style={[styles.dropdown,{backgroundColor: dropdownColors.enroute}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
              <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
            onSelect={(idx, value) => onSelectOption(idx, value, 'enroute')}
          />
        </View>
      </View>
      <View style={styles.preferenceSelect}>
        <View>
          <Text style={styles.text}>Approved</Text>
        </View>
        {/* Disabled Following ES-Lint rule
          It is corrected in latest version which is still in beta */}
        <View>
          <ModalDropdown
            style={[styles.dropdown,{backgroundColor: dropdownColors.approved}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
              <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
            onSelect={(idx, value) => onSelectOption(idx, value, 'approved')}
          />
        </View>
      </View>
      <View style={styles.preferenceSelect}>
        <View>
          <Text style={styles.text}>Final</Text>
        </View>
        {/* Disabled Following ES-Lint rule
          It is corrected in latest version which is still in beta */}
        <View>
          <ModalDropdown
            style={[styles.dropdown,{backgroundColor: dropdownColors.final}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
              <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
            onSelect={(idx, value) => onSelectOption(idx, value, 'final')}
          />
        </View>
      </View>
      <View style={styles.preferenceSelect}>
        <View>
          <Text style={styles.text}>Processed</Text>
        </View>
        {/* Disabled Following ES-Lint rule
          It is corrected in latest version which is still in beta */}
        <View>
          <ModalDropdown
            style={[styles.dropdown,{backgroundColor: dropdownColors.processed}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
              <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
            onSelect={(idx, value) => onSelectOption(idx, value, 'processed')}
          />
        </View>
      </View>
      <View style={styles.preferenceSelect}>
        <View>
          <Text style={styles.text}>Exception</Text>
        </View>
        {/* Disabled Following ES-Lint rule
          It is corrected in latest version which is still in beta */}
        <View>
          <ModalDropdown
            style={[styles.dropdown,{backgroundColor: dropdownColors.exception}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
              <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
            onSelect={(idx, value) => onSelectOption(idx, value, 'exception')}
          />
        </View>
      </View>
      <View style={styles.preferenceSelect}>
        <View>
          <Text style={styles.text}>Cancel</Text>
        </View>
        {/* Disabled Following ES-Lint rule
          It is corrected in latest version which is still in beta */}
        <View>
          <ModalDropdown
            style={[styles.dropdown,{backgroundColor: dropdownColors.cancel}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
              <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
            onSelect={(idx, value) => onSelectOption(idx, value, 'cancel')}
          />
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

const mapDispatchToProps = dispatch => ({
  onSelectOption: (idx, value, option) =>
    dispatch(selectDropdownOption({ value, option })),
});

const mapStateToProps = state => ({
  dropdownColors: state.actionItemsReducer.dropdownColors,
});

PreferencesContainer.propTypes = {
  onSelectOption: React.PropTypes.func.isRequired,
  dropdownColors: React.PropTypes.shape({}).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(PreferencesContainer);
