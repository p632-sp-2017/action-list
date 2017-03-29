import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import ActionItemBody from './action_item_body';
import { toggleItem } from '../actions/action_items';
import { Colors } from '../lib/commons';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9e9e9',
    borderBottomWidth: 0.5,
    paddingRight: 10,
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    padding: 10,
    color: '#7B1500',
    fontWeight: 'bold',
  },
  buttonImage: {
    marginTop: 10,
    width: 20,
    height: 20,
  },
  body: {
    padding: 10,
    paddingTop: 0,
  },
});

const icons = {
  /* eslint-disable global-require */
  /* rule disabled since image loading need not be global */
  up: require('./img/up-icon.png'),
  down: require('./img/down-icon.png'),
  /* eslint-enable global-require */
};

const ActionItem = ({ rowData, onToggle }) => (
  <View style={styles.container} >
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        {rowData.title}
      </Text>
      <TouchableHighlight
        onPress={() => onToggle(rowData.id)}
        underlayColor={Colors.IUGray}
      >
        <Image
          style={styles.buttonImage}
          source={rowData.expanded ? icons.up : icons.down}
        />
      </TouchableHighlight>
    </View>
    { rowData.expanded ?
      <View style={styles.body}>
        <ActionItemBody {...rowData} />
      </View> : null
    }
  </View>
);


const mapDispatchToProps = dispatch => ({
  onToggle: id => dispatch(toggleItem(id)),
});

export default connect(null, mapDispatchToProps)(ActionItem);

ActionItem.propTypes = {
  rowData: React.PropTypes.shape({
    expanded: React.PropTypes.bool,
    title: React.PropTypes.string,
  }).isRequired,
  onToggle: React.PropTypes.func.isRequired,
};
