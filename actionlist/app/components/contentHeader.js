import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Colors } from '../lib/commons';

const style = StyleSheet.create({
  headerText: {
    fontSize: 10,
    color: Colors.IUCrimson,
    fontFamily: 'BentonSansBold, Arial, sans-serif',
    margin: 10,
  },
});

const ContentHeader = props => (
  <View>
    <Text style={style.headerText}>{props.children}</Text>
  </View>
);

ContentHeader.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default ContentHeader;
