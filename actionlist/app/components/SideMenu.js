import React from 'react';

import {
  StyleSheet,
  View,
  Text,
<<<<<<< HEAD
  ScrollView,
} from 'react-native';

/* eslint-disable no-unused-vars */
import Button from 'react-native-button';
import Accordion from 'react-native-collapsible/Accordion';
import RadioButtons from 'react-native-radio-buttons';
import { connect } from 'react-redux';
import { filterActionList } from '../actions/action_items';
import { filterTypes } from '../lib/commons';
=======
  TouchableHighlight,
} from 'react-native';

import Button from 'react-native-button';
import { connect } from 'react-redux';
import { sortActionList } from '../actions/action_items';
import { Colors, sortTypes } from '../lib/commons';

>>>>>>> develop

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
    fontFamily: 'BentonSansBold,   Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
    borderBottomWidth: 0.5,
  },
<<<<<<< HEAD
  headerText: {
    fontSize: 10,
    color: '#7B1500',
    fontFamily: 'BentonSansBold, Arial, sans-serif',
    margin: 10,
  },
  content: {
    fontSize: 10,
    color: '#7B1500',
    fontFamily: 'BentonSansBold, Arial, sans-serif',
    margin: 10,
  },
  container: {
    backgroundColor: '#f4f7f9',
    paddingTop: 0,
  },
});


const FILTERS = [
  {
    title: 'Document Route Status',
    data: ['All', 'Saved', 'Initiated', 'Disapproved', 'Enroute', 'Approved', 'Final', 'Processed', 'Exception', 'Canceled'],
  },
  {
    title: 'Document Type',
    data: ['one', 'two'],
  },
  {
    title: 'Action Requested',
    data: ['All', 'Approve', 'Complete', 'Acknowledge', 'FYI'],
  },
  {
    title: 'Document Created Date',
    data: ['one', 'two'],
  },
  {
    title: 'Document Assigned Date',
    data: ['one', 'two'],
  },
];




const SideMenu = ({ onActionListFiltering }) => (
    <ScrollView style={style.container}>
      <View style={style.view}>
        <Button style={style.text}>Home</Button>
        <Button style={style.text}>Prefrences</Button>
        <Text style={style.text}>Filter</Text>
        <View style={style.header}>
          <Text style={style.headerText}>{filterTypes.DocumentRouteStatus}</Text>
        </View>
        <View style={style.content}>
          <RadioButtons
            options={FILTERS[0].data}
            onSelection={ (selectedOption) => onActionListFiltering(filterTypes.DocumentRouteStatus,selectedOption) }
          />
        </View>
        <View style={style.header}>
          <Text style={style.headerText}>{filterTypes.DocumentType}</Text>
        </View>
        <View style={style.content}>
          <RadioButtons
            options={FILTERS[1].data}
            onSelection={ (selectedOption) => onActionListFiltering(filterTypes.DocumentRouteStatus,selectedOption) }
          />
        </View>
        <View style={style.header}>
          <Text style={style.headerText}>{filterTypes.ActionRequested}</Text>
        </View>
        <View style={style.content}>
          <RadioButtons
           options={FILTERS[2].data}
           onSelection={ (selectedOption) => onActionListFiltering(filterTypes.DocumentRouteStatus,selectedOption) }
          />
        </View>
        <View style={style.header}>
         <Text style={style.headerText}>{filterTypes.DocumentCreatedDate}</Text>
        </View>
        <View style={style.content}>
          <RadioButtons
            options={FILTERS[3].data}
            onSelection={ (selectedOption) => onActionListFiltering(filterTypes.DocumentRouteStatus,selectedOption) }
          />
        </View>
        <View style={style.header}>
         <Text style={style.headerText}>{filterTypes.DocumentAssignedDate}</Text>
        </View>
        <View style={style.content}>
          <RadioButtons
            options={FILTERS[4].data}
            onSelection={ (selectedOption) => onActionListFiltering(filterTypes.DocumentRouteStatus,selectedOption) }
          />
        </View>
        </View>
    </ScrollView>
);


const mapDispatchToProps = dispatch => ({
  onActionListFiltering: (filterType,value) => dispatch(filterActionList({"filterType":filterType,"value":value})),
});

SideMenu.propTypes = {
  onActionListFiltering: React.PropTypes.func.isRequired,
};
/* eslint-enable no-unused-vars */

export default connect(null, mapDispatchToProps)(SideMenu);
=======
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
        <Text
          style={(optionSelected === sortTypes.creationDate) ?
          style.selected_text : style.subtext}
        >Date Created</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onSort(sortTypes.lastApprovedDate)}>
        <Text
          style={(optionSelected === sortTypes.lastApprovedDate) ?
          style.selected_text : style.subtext}
        >Date Last Approved</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onSort(sortTypes.processType)}>
        <Text
          style={(optionSelected === sortTypes.processType) ?
          style.selected_text : style.subtext}
        >Process Type</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onSort(sortTypes.actionRequested)}>
        <Text
          style={(optionSelected === sortTypes.actionRequested) ?
          style.selected_text : style.subtext}
        >Action Requested</Text>
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
  optionSelected: React.PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
>>>>>>> develop
