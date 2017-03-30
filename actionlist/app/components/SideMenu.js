import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Button from 'react-native-button';

const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    borderBottomWidth: 0.5,
    paddingRight: 10,
  },
  text: {
    color: '#7B1500',
    margin: 10,
    fontFamily: 'BentonSansBold, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
    borderBottomWidth: 0.5,
  },
});

const SideMenu = (
  <View style={style.view}>
    <Button style={style.text}>Home</Button>
    <Button style={style.text}>Prefrences</Button>
    <Button style={style.text}>Filter</Button>
    <Button style={style.text}>Sort</Button>
  </View>
);

export default SideMenu;
