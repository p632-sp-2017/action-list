import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
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
    <Button style={style.text} onPress={() => Actions.home()}>Home</Button>
    <Button style={style.text} onPress={() => Actions.pref()} >Prefrences</Button>
    <Button style={style.text}>Filter</Button>
    <Button style={style.text}>Sort</Button>
  </View>
);

export default SideMenu;
