import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  DrawerLayoutAndroid,
  TouchableHighlight,
} from 'react-native';

import Button from 'react-native-button';

import ActionListItems from './action_list_items';

const style = StyleSheet.create({
  toolbar: {
    backgroundColor: '#7a1705',
    borderTopColor: '#990000',
    borderTopWidth: 5,
    flexDirection: 'row',
  },
  toolbarTrident: {
    width: 43,
    height: 50,
    marginLeft: 10,
  },
  toolbarTitle: {
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'BentonSansBold, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 10,
    marginTop: 7,
    flex: 1,
  },
  toolbarSearch: {
    margin: 15,
    width: 16,
    height: 16,
  },
  toolbarButton: {
    margin: 15,
    width: 16,
    height: 16,
    marginRight: 20,
    justifyContent: 'flex-end',
  },
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

/* eslint-disable global-require */
/* rule disabled since image loading need not be global */
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }
  openDrawer = () => {
    this.DRAWER.openDrawer();
  };
  render() {
    const navigationView = (
      <View style={style.view}>
        <Button style={style.text}>Home</Button>
        <Button style={style.text}>Prefrences</Button>
        <Button style={style.text}>Filter</Button>
        <Button style={style.text}>Sort</Button>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        ref={(c) => { this.DRAWER = c; }}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Right}
        renderNavigationView={() => navigationView}
      >
        <View>
          <View style={style.toolbar}>
            <Image
              style={style.toolbarTrident}
              source={require('./img/trident-large.png')}
            />
            <Text style={style.toolbarTitle}>
              IU Action List
            </Text>
            <Image
              style={style.toolbarSearch}
              source={require('./img/search.png')}
            />
            <TouchableHighlight onPress={this.openDrawer}>
              <Image
                style={style.toolbarButton}
                source={require('./img/menu-icon.png')}
              />
            </TouchableHighlight>
          </View>
          <ActionListItems />
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

