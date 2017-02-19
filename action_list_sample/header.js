import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={ style.container }>
                <Image
                  style={style.image}
                  source={require('./img/trident-large.png')}
                />
                <Text style={ style.text }>Welcome to Action List</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#7a1705",
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
        padding: 20
    },

    image: {
      width: 50,
      height: 50
    }
});