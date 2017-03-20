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
import { toggle_item } from '../actions/action_items';

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
              };

const ActionItem = ({rowData, onToggle}) => (
  <View style={styles.container} >
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        {rowData.title}
      </Text>
      <TouchableHighlight
        onPress={() => onToggle(rowId)}
        underlayColor="#e9e9e9"
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


const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (rowId) => dispatch(toggle_item(rowId))
  };
};

export default connect(mapDispatchToProps)(ActionItem);