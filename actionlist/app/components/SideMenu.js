import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

/* eslint-disable no-unused-vars */
import Button from 'react-native-button';
import Accordion from 'react-native-collapsible/Accordion';
import RadioButtons from 'react-native-radio-buttons';
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
    fontFamily: 'BentonSansBold,   Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
    borderBottomWidth: 0.5,
  },
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
});

const FILTERS = [
  {
    title: 'Document Route Status',
    data: ['one', 'two'],
  },
  {
    title: 'Document Type',
    data: ['one', 'two'],
  },
  {
    title: 'Action Requested',
    data: ['one', 'two'],
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

const renderHeader = section => (
  <View style={style.header}>
    <Text style={style.headerText}>{section.title}</Text>
  </View>
);

const renderContent = section => {
  switch(section.title){
    case "Document Route Status": {
        return (
          <View style={style.content}>
            <RadioButtons
              options={section.data}
              onSelection={ onFilterByDocumentRouteStatus }
            />
          </View>
        );
    }
    case "Document Type": {
      return(
          <View style={style.content}>
            <RadioButtons
              options={section.data}
            />
          </View>
        );
      }
    case "Action Requested": {
      return(
        <View style={style.content}>
          <RadioButtons
            options={section.data}
          />
        </View>
      );
    }
    case "Document Created Date": {
        return(
          <View style={style.content}>
            <RadioButtons
              options={section.data}
            />
          </View>
        );
    }
    case "Document Assigned Date": {
      return(
          <View style={style.content}>
            <RadioButtons
              options={section.data}
            />
          </View>
      )
    }
  }
};

const SideMenu = ({
  onFilterByDocumentRouteStatus,
  onFilterByActionRequested,
  onFilterByDocumentType,
  onFilterByDocumentCreationDate,
  onFilterByDocumentAssignedDate }) => (
    <View style={style.view}>
      <Button style={style.text}>Home</Button>
      <Button style={style.text}>Prefrences</Button>
      <Text style={style.text}>Filter</Text>
      <Accordion
        sections={FILTERS}
        renderHeader={renderHeader}
        renderContent={renderContent}
      />
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
/* eslint-enable no-unused-vars */

export default connect(null, mapDispatchToProps)(SideMenu);
