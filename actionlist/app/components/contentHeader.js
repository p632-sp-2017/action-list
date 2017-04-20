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

const ContentHeader = ({ title }) => (
  <View>
    <Text style={style.headerText}>{title}</Text>
  </View>
);

ContentHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default ContentHeader;
