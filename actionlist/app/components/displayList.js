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

const dateFilter = (dataSource, filters) => (
  dataSource.filter(item => (
    (Date.parse(item.creationDate) > Date.parse(filters.documentCreationDate.start)) &&
    (Date.parse(item.creationDate) < Date.parse(filters.documentCreationDate.end)) &&
    (Date.parse(item.lastApprovedDate) > Date.parse(filters.documentAssignedDate.start)) &&
    (Date.parse(item.lastApprovedDate) < Date.parse(filters.documentAssignedDate.end))))
);

const filterData = (dataSource, filters) => (
  dateFilter(dataSource, filters).filter(item => ((item.actionRequested.label === filters.actionRequested || filters.actionRequested === 'All') &&
    (item.processType.label === filters.documentType || filters.documentType === 'All') &&
    (item.processInstanceStatus.label === filters.documentRouteStatus || filters.documentRouteStatus === 'All')))
);

const DisplayList = ({ dataSource, filterStatus }) => (
  <View style={styles.full_container}>
    <LazyloadScrollView>
      <Accordion
        sections={filterData(dataSource, filterStatus)}
        renderHeader={ActionItemHeader}
        renderContent={ActionItemBody}
      />
    </LazyloadScrollView>
  </View>
);

const mapStateToProps = state => ({
  dataSource: state.actionItemsReducer.dataSource,
  filterStatus: state.actionItemsReducer.filterStatus,
});

DisplayList.propTypes = {
  dataSource: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
  filterStatus: React.PropTypes.shape({
    actionRequested: React.PropTypes.string,
    documentType: React.PropTypes.string,
    documentRouteStatus: React.PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(DisplayList);
