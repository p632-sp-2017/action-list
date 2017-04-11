import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Navigator,
} from 'react-native';
import { LazyloadScrollView } from 'react-native-lazyload';
import Accordion from 'react-native-collapsible/Accordion';
import ActionItemHeader from './action_item_header';
import ActionItemBody from './action_item_body';

const styles = StyleSheet.create({
  full_container: {
    backgroundColor: '#ffffff',
    paddingBottom: Navigator.NavigationBar.Styles.General.TotalNavHeight,
  },
  container: {
    backgroundColor: '#f4f7f9',
    paddingTop: 0,
  },
});

const DisplayList = ({ dataSource }) => (
  <View style={styles.full_container}>
    <LazyloadScrollView>
      <Accordion
        sections={dataSource}
        renderHeader={ActionItemHeader}
        renderContent={ActionItemBody}
      />
    </LazyloadScrollView>
  </View>
);

const mapStateToProps = state => ({
  dataSource: state.actionItemsReducer.dataSource,
});

DisplayList.propTypes = {
  dataSource: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps)(DisplayList);
