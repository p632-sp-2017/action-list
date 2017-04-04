import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import Button from 'react-native-button';
import { connect } from 'react-redux';
import { sortByCreationDate, sortByLastApprovedDate, sortByProcessType, sortByActionRequested } from '../actions/action_items';
import { Colors } from '../lib/commons';


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
  }
});

const SideMenu = ({ sort_value,
  onSortByCreationDate,
  onSortByLastApprovedDate,
  onSortByProcessType,
  onSortByActionRequested }) => (
    <View style={style.view}>
      <Button style={style.text}>Home</Button>
      <Button style={style.text}>Prefrences</Button>
      <Button style={style.text}>Filter</Button>
      <View style={style.view}>
        <Text style={style.text}>
          Sort
        </Text>
        <TouchableHighlight onPress={() => onSortByCreationDate()}>
          <Text style={(sort_value == 'CreationDate') ? style.selected_text : style.subtext}> Date Created</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => onSortByLastApprovedDate()}>
          <Text style={(sort_value == 'ApprovedDate') ? style.selected_text : style.subtext}> Date Last Approved</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => onSortByProcessType()}>
          <Text style={(sort_value == 'ProcessType') ? style.selected_text : style.subtext}> Process Type</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => onSortByActionRequested()}>
          <Text style={(sort_value == 'ActionRequested') ? style.selected_text : style.subtext}> Action Requested</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
  
const mapStateToProps = state => ({
  sort_value: state.actionItemsReducer.sort_value,
});

const mapDispatchToProps = dispatch => ({
  onSortByCreationDate: () => dispatch(sortByCreationDate()),
  onSortByLastApprovedDate: () => dispatch(sortByLastApprovedDate()),
  onSortByProcessType: () => dispatch(sortByProcessType()),
  onSortByActionRequested: () => dispatch(sortByActionRequested()),
});

SideMenu.propTypes = {
  onSortByCreationDate: React.PropTypes.func.isRequired,
  onSortByLastApprovedDate: React.PropTypes.func.isRequired,
  onSortByProcessType: React.PropTypes.func.isRequired,
  onSortByActionRequested: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
