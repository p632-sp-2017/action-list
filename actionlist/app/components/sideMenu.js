import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { sortActionList, filterReset } from '../actions/actionItems';
import { Colors, sortTypes, filterTypes } from '../lib/commons';
import FilterPicker from './filterPicker';
import DateRangePicker from './dateRangePicker';

const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.iuGray,
    borderBottomWidth: 0.5,
    paddingRight: 10,
  },
  text: {
    color: Colors.iuCrimson,
    margin: 10,
    fontFamily: 'BentonSansBold, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
    borderBottomWidth: 0.5,
  },
  resetContainer: {
    backgroundColor: Colors.iuCrimsonDark,
    padding: 5,
    borderRadius: 8,
    marginRight: 10,
    marginLeft: 70,
    marginBottom: 10,
    marginTop: 10,
    width: 100,
  },
  resetButton: {
    fontSize: 10,
    color: Colors.white,
  },
  picker: {
    fontSize: 10,
    color: Colors.iuGray,
    fontFamily: 'BentonSansBold, Arial, sans-serif',
  },
  container: {
    backgroundColor: Colors.backgroundGrey,
    paddingTop: 0,
  },
  subtext: {
    color: Colors.iuCrimson,
    marginLeft: 15,
    marginBottom: 10,
    fontFamily: 'BentonSansBold, Arial, sans-serif',
    fontSize: 10,
    textAlign: 'left',
  },
  selected_text: {
    color: Colors.iuCrimson,
    marginLeft: 15,
    marginBottom: 10,
    fontFamily: 'BentonSansBold, Arial, sans-serif',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

const SideMenu = ({ optionSelected,
  filters,
  onSort,
  onReset,
}) => (
  <ScrollView style={style.container}>
    <View style={style.view}>
      <Button style={style.text} onPress={() => Actions.home()}>Home</Button>
      <Button style={style.text} onPress={() => Actions.pref()}>Preferences</Button>
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
        <Text style={style.text}>Filter</Text>
        <FilterPicker
          filter={filterTypes.DocumentRouteStatus}
          value={filters.documentRouteStatus}
          filterKey={'documentRouteStatus'}
        />
        <FilterPicker
          filter={filterTypes.DocumentType}
          value={filters.documentType}
          filterKey={'documentType'}
        />
        <FilterPicker
          filter={filterTypes.ActionRequested}
          value={filters.actionRequested}
          filterKey={'actionRequested'}
        />
        <DateRangePicker
          title={filterTypes.DocumentCreatedDate.title}
          type={'documentCreationDate'}
          dateSet={filters.documentCreationDate}
        />
        <DateRangePicker
          title={filterTypes.DocumentAssignedDate.title}
          type={'documentAssignedDate'}
          dateSet={filters.documentAssignedDate}
        />
        <Button
          containerStyle={style.resetContainer}
          style={style.resetButton}
          onPress={() => onReset()}
        >Reset Filters</Button>
      </View>
    </View>
  </ScrollView>
);

const mapStateToProps = state => ({
  optionSelected: state.actionItemsReducer.optionSelected,
  filters: state.actionItemsReducer.filterStatus,
});

const mapDispatchToProps = dispatch => ({
  onReset: () => dispatch(filterReset()),
  onSort: criteria => dispatch(sortActionList(criteria)),
});

SideMenu.propTypes = {
  onSort: React.PropTypes.func.isRequired,
  optionSelected: React.PropTypes.string.isRequired,
  onReset: React.PropTypes.func.isRequired,
  filters: React.PropTypes.shape({
    documentRouteStatus: React.PropTypes.string,
    documentType: React.PropTypes.string,
    documentCreationDate: React.PropTypes.shape({
      start: React.PropTypes.string,
      end: React.PropTypes.string,
    }),
    documentAssignedDate: React.PropTypes.shape({
      start: React.PropTypes.string,
      end: React.PropTypes.string,
    }),
    actionRequested: React.PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
