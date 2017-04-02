import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import Button from 'react-native-button';
import { connect } from 'react-redux';

import { sortByCreationDate, sortByLastUpdatedDate, sortByProcessType, sortByActionRequested } from '../actions/action_items';

const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    borderBottomWidth: 0.5,
    paddingRight: 10,
  },
  text: {
    color: '#7B1500',
    margin: 10,
    fontFamily: 'BentonSansBold, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
    borderBottomWidth: 0.5,
  },
});

const SideMenu = ({ onSortByCreationDate, onSortByLastUpdatedDate, 
									 onSortByProcessType, onSortByActionRequested}) => (
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
			<TouchableHighlight onPress={() => onSortByLastUpdatedDate()}>
        <Text style={style.text}> Last Updated</Text>
      </TouchableHighlight>
			<TouchableHighlight onPress={() => onSortByProcessType()}>
        <Text style={style.text}> Process Type</Text>
      </TouchableHighlight>
			<TouchableHighlight onPress={() => onSortByActionRequested()}>
        <Text style={style.text}> Action Requested</Text>
      </TouchableHighlight>
    </View>
  </View>
);

const mapDispatchToProps = dispatch => ({
  onSortByCreationDate: () => dispatch(sortByCreationDate()),
	onSortByLastUpdatedDate: () => dispatch(sortByLastUpdatedDate()),
	onSortByProcessType: () => dispatch(sortByProcessType()),
	onSortByActionRequested: () => dispatch(sortByActionRequested()),
});

SideMenu.propTypes = {
  onSortByCreationDate: React.PropTypes.func.isRequired,
	onSortByLastUpdatedDate: React.PropTypes.func.isRequired,
	onSortByProcessType: React.PropTypes.func.isRequired,
	onSortByActionRequested: React.PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SideMenu);
