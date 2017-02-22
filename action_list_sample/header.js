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
            <View style={ style.toolbar }>
                <Image
                  style={style.toolbarTrident}
                  source={require('./img/trident-large.png')}/>

                <Text style={ style.toolbarTitle}>IU Bloomington</Text>

                  <Image
                    style={style.toolbarSearch}
                    source={require('./img/search.png')}/>

                <Image
                  style={style.toolbarButton}
                  source={require('./img/hamburger.png')}/>
            </View>
        )
    }
}

// const style = StyleSheet.create({
//     container: {
//         backgroundColor: "#7a1705",
//         justifyContent: 'center',
//         alignItems: 'center'
//     },

//     text: {
//         color: "white",
//         textAlign: "center",
//         fontSize: 18,
//         padding: 20
//     },

//     image: {
//       width: 50,
//       height: 50
//     }
// });

const style = StyleSheet.create({
  toolbar:{
        backgroundColor:'#7a1705',
        borderTopColor:'#990000',
        borderTopWidth: 5,
        flexDirection:'row'    
    },
    toolbarTrident:{
        width: 43,
        height:60, 
        marginLeft: 10
    },
    toolbarTitle:{
        color:'#fff',
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily: 'BentonSansBold, Arial, sans-serif',
        fontWeight:'bold',
        fontSize: 30,
        marginLeft: 10,
        flex:1               
    },
    toolbarSearch:{
        backgroundColor:'#990000',
        margin: 10,
        padding: 30,
        width: 30,
        height: 35, 
        justifyContent: 'center'
    },
    toolbarButton:{
        margin: 10,
        width: 30,
        height:31, 
        marginRight: 10,
        justifyContent: 'flex-end'
    }
});  