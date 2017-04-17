/*
This is a untility component for preferences page,
where we have set colors for each action type.
option - This variable has the avction type
onSelectOption -  This is a function that is called,
 when a color is selected for a specific option in dropdown.
 optionColor - This is the variable that holds a color for specific action type
*/
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import ModalDropdown from 'react-native-modal-dropdown';
import { selectDropdownOption } from '../actions/action_items';
import { preferenceColors } from '../lib/commons';

const styles = StyleSheet.create({
  dropdown: {
    width: 150,
    borderStyle: 'solid',
    borderWidth: 1,
    marginRight: 30,
  },
});

const Dropdown = ({ option, onSelectOption, optionColor }) => (
  <ModalDropdown
    style={[styles.dropdown, { backgroundColor: optionColor }]}
    options={Object.values(preferenceColors)} renderRow={rowData =>
      <View style={{ backgroundColor: rowData }}><Text>{rowData}</Text></View>}
    onSelect={(idx, value) => onSelectOption(idx, value, option)}
  />
);

const mapStateToProps = (state, ownProps) => ({
  optionColor: state.actionItemsReducer.dropdownColors[ownProps.option],
});

const mapDispatchToProps = dispatch => ({
  onSelectOption: (idx, value, option) =>
    dispatch(selectDropdownOption({ value, option })),
});

Dropdown.propTypes = {
  onSelectOption: React.PropTypes.func.isRequired,
  optionColor: React.PropTypes.string.isRequired,
  option: React.PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
