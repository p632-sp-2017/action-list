import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import ActionItem from './action_item';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f7f9',
    paddingTop: 0,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const RenderList = rowData => (
  <View>
    <ScrollView style={styles.container}>
      <ActionItem rowData={rowData} />
    </ScrollView>
  </View>
);

RenderList.propTypes = {
  rowData: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

RenderList.defaultProps = {
  rowData: {},
};

export default RenderList;
