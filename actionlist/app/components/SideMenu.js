import React from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';
import { Colors } from '../lib/commons';

const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: Colors.IUGray,
    borderBottomWidth: 0.5,
    paddingRight: 10,
  },
  text: {
    color: Colors.IUCrimson,
    margin: 10,
    fontFamily: 'BentonSansBold, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
    borderBottomWidth: 0.5,
  },
});

const SideMenu = () => (
  <View style={style.view}>
    <Button style={style.text} title='Home' onPress='' />
    <Button style={style.text} title='Preferences' onPress='' />
    <Button style={style.text} title='Filter' onPress='' />
    <Button style={style.text} title='Sort' onPress='' />
  </View>
);

export default SideMenu;
