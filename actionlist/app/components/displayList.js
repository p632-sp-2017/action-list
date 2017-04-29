import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Navigator,
} from 'react-native';
import { LazyloadScrollView } from 'react-native-lazyload';
import Accordion from 'react-native-collapsible/Accordion';
import ActionItemHeader from './actionItemHeader';
import ActionItemBody from './actionItemBody';
import { Colors } from '../lib/commons';

const styles = StyleSheet.create({
  full_container: {
    backgroundColor: Colors.white,
    paddingBottom: Navigator.NavigationBar.Styles.General.TotalNavHeight,
  },
  container: {
    backgroundColor: Colors.backgroundGrey,
    paddingTop: 0,
  },
});

const checkItemDate = (item, filterDate) => (
  (filterDate.start === '' ||
    Date.parse(item.creationDate) > Date.parse(filterDate.start)) &&
  (filterDate.end === '' ||
    Date.parse(item.creationDate) < Date.parse(filterDate.end))
);

const dateFilter = (dataSource, filters) => (
  dataSource.filter(item => (
    checkItemDate(item, filters.documentCreationDate) &&
    checkItemDate(item, filters.documentAssignedDate)))
);

const filterData = (dataSource, filters) => (
  dateFilter(dataSource, filters).filter(item => (
    (item.actionRequested.label === filters.actionRequested || filters.actionRequested === 'All') &&
    (item.processType.label === filters.documentType || filters.documentType === 'All') &&
    (item.processInstanceStatus.label === filters.documentRouteStatus || filters.documentRouteStatus === 'All')))
);

const DisplayList = ({ dataSource, filterStatus, dropdownColors }) => (
  <View style={styles.full_container}>
    <LazyloadScrollView>
      <Accordion
        sections={filterData(dataSource, filterStatus)}
        renderHeader={(rowData, index, isActive) =>
          ActionItemHeader({ rowData, index, isActive, dropdownColors })}
        renderContent={ActionItemBody}
      />
    </LazyloadScrollView>
  </View>
);

const mapStateToProps = state => ({
  dataSource: state.actionItemsReducer.dataSource,
  filterStatus: state.actionItemsReducer.filterStatus,
  dropdownColors: state.actionItemsReducer.dropdownColors,
});

DisplayList.propTypes = {
  dataSource: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
  dropdownColors: React.PropTypes.shape({
    Saved: React.PropTypes.string,
    Initiated: React.PropTypes.string,
    Disapproved: React.PropTypes.string,
    Enroute: React.PropTypes.string,
    Approved: React.PropTypes.string,
    Final: React.PropTypes.string,
    Processed: React.PropTypes.string,
    Exception: React.PropTypes.string,
    Cancel: React.PropTypes.string,
  }).isRequired,
  filterStatus: React.PropTypes.shape({
    actionRequested: React.PropTypes.string,
    documentType: React.PropTypes.string,
    documentRouteStatus: React.PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(DisplayList);
