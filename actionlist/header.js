import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#7a1705',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 20,
  },

  image: {
    width: 50,
    height: 50,
  },
});

/* eslint-disable global-require */
/* rule disabled since image loading need not be global */
const Header = () => (
  <View style={style.container}>
    <Image style={style.image} source={require('./img/trident-large.png')} />
    <Text style={style.text}>Welcome to Action List</Text>
  </View>
  );

module.exports = Header;
