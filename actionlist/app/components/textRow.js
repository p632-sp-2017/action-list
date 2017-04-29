import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Colors } from '../lib/commons';

const styles = StyleSheet.create({
  text: {
    flex: 1,
    color: Colors.iuCrimson,
    marginBottom: 2,
  },
  caption: {
    flex: 1,
  },
});

const TextRow = ({ title, data }) => (
  <View style={{ flexDirection: 'row' }}>
    <Text style={styles.caption}>{title}: </Text>
    <Text style={styles.text}>{data}</Text>
  </View>
);

TextRow.propTypes = {
  title: React.PropTypes.string.isRequired,
  data: React.PropTypes.string.isRequired,
};

export default TextRow;
