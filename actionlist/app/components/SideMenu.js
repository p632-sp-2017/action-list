import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import Button from 'react-native-button';

import { connect } from 'react-redux';

import { filterByDocumentRouteStatus, filterByActionRequested, filterByDocumentType, filterByDocumentCreationDate, filterByDocumentAssignedDate } from '../actions/action_items';

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

const SideMenu = ({ onFilterByDocumentRouteStatus, onFilterByActionRequested,
  onFilterByDocumentType, onFilterByDocumentCreationDate, onFilterByDocumentAssignedDate }) => (
  <View style={style.view}>
    <Button style={style.text}>Home</Button>
    <Button style={style.text}>Prefrences</Button>
    <View style={style.view}>
      <Text style={style.text}> Filter </Text>
      <TouchableHighlight onPress={() => onFilterByDocumentRouteStatus()}>
        <Text style={style.text}>Document Route Status</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onFilterByActionRequested()}>
        <Text style={style.text}>Action Requested</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onFilterByDocumentType()}>
        <Text style={style.text}>Document Type</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onFilterByDocumentCreationDate()}>
        <Text style={style.text}>Document Creation Date</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onFilterByDocumentAssignedDate()}>
        <Text style={style.text}>Document Assigned Date</Text>
      </TouchableHighlight>
    </View>
    <Button style={style.text}>Sort</Button>
  </View>
);

const mapDispatchToProps = dispatch => ({
  onFilterByDocumentRouteStatus: () => dispatch(filterByDocumentRouteStatus()),
  onFilterByActionRequested: () => dispatch(filterByActionRequested()),
  onFilterByDocumentType: () => dispatch(filterByDocumentType()),
  onFilterByDocumentCreationDate: () => dispatch(filterByDocumentCreationDate()),
  onFilterByDocumentAssignedDate: () => dispatch(filterByDocumentAssignedDate()),
});

SideMenu.propTypes = {
  onFilterByDocumentRouteStatus: React.PropTypes.func.isRequired,
  onFilterByActionRequested: React.PropTypes.func.isRequired,
  onFilterByDocumentType: React.PropTypes.func.isRequired,
  onFilterByDocumentCreationDate: React.PropTypes.func.isRequired,
  onFilterByDocumentAssignedDate: React.PropTypes.func.isRequired,
};


export default connect(null, mapDispatchToProps)(SideMenu);
