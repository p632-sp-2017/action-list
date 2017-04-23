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
import { selectDropdownOption } from '../actions/actionItems';
import { Colors, preferenceColors } from '../lib/commons';

const styles = StyleSheet.create({
  dropdown: {
    width: 150,
    height: 30,
    marginRight: 30,
    borderStyle: 'solid',
    borderColor: Colors.darkGrey,
    borderLeftWidth: 0,
    borderWidth: 1,
  },
  dropText: {
    color: '#333',
    marginTop: 5,
    marginLeft: 5,
  },
  contentDiv: {
    flexDirection: 'row',
    flex: 1,
  },
  colorStub: {
    width: 20,
    height: 30,
    marginRight: 10,
  },
  mainColorStub: {
    width: 20,
    height: 30,
    borderWidth: 1,
  },
});

const dropdownOption = color => (
  <View style={[styles.contentDiv, { width: 150 }]}>
    <View style={[styles.colorStub, { backgroundColor: color }]} />
    <Text style={{ color: Colors.darkGrey }}>{color}</Text>
  </View>
);

const Dropdown = ({ option, onSelectOption, optionColor }) => (
  <View style={styles.contentDiv}>
    <View style={[styles.mainColorStub, { backgroundColor: optionColor }]} />
    <ModalDropdown
      style={styles.dropdown}
      options={Object.values(preferenceColors)}
      defaultValue={optionColor}
      textStyle={styles.dropText}
      renderRow={color => dropdownOption(color)}
      onSelect={(idx, value) => onSelectOption(idx, value, option)}
    />
  </View>
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
