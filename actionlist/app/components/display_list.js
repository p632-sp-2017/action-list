/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  ListView,
} from 'react-native';
import RenderList from './render_list';

const styles = StyleSheet.create({
  full_container: {
    backgroundColor: '#ffffff',
  },
});

const DisplayList = ({ dataSource }) => (
  <View style={styles.full_container}>
    <ListView
      dataSource={dataSource}
      renderRow={rowData => <RenderList {...rowData} />}
    />
  </View>
);

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const mapStateToProps = state => ({
  dataSource: ds.cloneWithRows(state.actionItemsReducer.dataSource),
});

DisplayList.propTypes = {
  dataSource: React.PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps)(DisplayList);

