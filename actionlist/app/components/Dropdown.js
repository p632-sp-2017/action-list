import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import ModalDropdown from 'react-native-modal-dropdown';
import { selectDropdownOption } from '../actions/action_items';

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

const styles = StyleSheet.create({
  dropdown: {
    width: 150,
    borderStyle: 'solid',
    borderWidth: 1,
    marginRight: 30,
  },
});

const Dropdown = ({ option, onSelectOption, dropdownColors }) => (
  <ModalDropdown
    style={[styles.dropdown,{backgroundColor: dropdownColors[option]}]} options={OPTIONS} renderRow={(rowData) => // eslint-disable-line
      <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
    onSelect={(idx, value) => onSelectOption(idx, value, option)}
  />
);

const mapStateToProps = state => ({
  dropdownColors: state.actionItemsReducer.dropdownColors,
});

const mapDispatchToProps = dispatch => ({
  onSelectOption: (idx, value, option) =>
    dispatch(selectDropdownOption({ value, option })),
});

Dropdown.propTypes = {
  onSelectOption: React.PropTypes.func.isRequired,
  dropdownColors: React.PropTypes.shape({}).isRequired,
  option: React.PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
