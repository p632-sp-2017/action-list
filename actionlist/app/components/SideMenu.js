import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import Button from 'react-native-button';
import { connect } from 'react-redux';
import { sortActionList } from '../actions/action_items';
import { Colors, sortTypes } from '../lib/commons';


const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.IUGray,
    borderBottomWidth: 0.5,
    paddingRight: 10,
  },
  text: {
    color: Colors.IUCrimson,
    margin: 10,
    fontFamily: 'BentonSansBold, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
    borderBottomWidth: 0.5,
  },
  subtext: {
    color: Colors.IUCrimson,
    marginLeft: 15,
    marginBottom: 10,
    fontFamily: 'BentonSansBold, Arial, sans-serif',
    fontSize: 10,
    textAlign: 'left',
  },
  selected_text: {
    color: Colors.IUCrimson,
    marginLeft: 15,
    marginBottom: 10,
    fontFamily: 'BentonSansBold, Arial, sans-serif',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

const SideMenu = ({ optionSelected, onSort }) => (
  <View style={style.view}>
    <Button style={style.text}>Home</Button>
    <Button style={style.text}>Preferences</Button>
    <Button style={style.text}>Filter</Button>
    <View style={style.view}>
      <Text style={style.text}>
        Sort
      </Text>
      <TouchableHighlight onPress={() => onSort(sortTypes.creationDate)}>
        <Text style={(optionSelected) ? style.selected_text : style.subtext}>
          Date Created</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onSort(sortTypes.lastApprovedDate)}>
        <Text style={(optionSelected) ? style.selected_text : style.subtext}>
          Date Last Approved</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onSort(sortTypes.processType)}>
        <Text style={(optionSelected) ? style.selected_text : style.subtext}>
          Process Type</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onSort(sortTypes.actionRequested)}>
        <Text style={(optionSelected) ? style.selected_text : style.subtext}>
          Action Requested</Text>
      </TouchableHighlight>
    </View>
  </View>
);

const mapStateToProps = state => ({
  optionSelected: state.actionItemsReducer.optionSelected,
});

const mapDispatchToProps = dispatch => ({
  onSort: criteria => dispatch(sortActionList(criteria)),
});

SideMenu.propTypes = {
  onSort: React.PropTypes.func.isRequired,
  optionSelected: React.PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
