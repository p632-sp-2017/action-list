import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import Button from 'react-native-button';
import { connect } from 'react-redux';
import { sortByCreationDate } from '../actions/action_items';
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
});

const SideMenu = ({ onSortByCreationDate }) => (
  <View style={style.view}>
    <Button style={style.text}>Home</Button>
    <Button style={style.text}>Prefrences</Button>
    <Button style={style.text}>Filter</Button>
    <View style={style.view}>
      <Text style={style.text}>
        Sort
      </Text>
      <TouchableHighlight onPress={() => onSortByCreationDate()}>
        <Text style={style.text}> Date Created</Text>
      </TouchableHighlight>
    </View>
  </View>
);

const mapDispatchToProps = dispatch => ({
  onSortByCreationDate: () => dispatch(sortByCreationDate()),
  // onSortByLastUpdatedDate: () => dispatch(sortByLastUpdatedDate()),
  // onSortByProcessType: () => dispatch(sortByProcessType()),
  // onSortByActionRequested: () => dispatch(sortByActionRequested()),
});

SideMenu.propTypes = {
  onSortByCreationDate: React.PropTypes.func.isRequired,
  // onSortByLastUpdatedDate: React.PropTypes.func.isRequired,
  // onSortByProcessType: React.PropTypes.func.isRequired,
  // onSortByActionRequested: React.PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SideMenu);
