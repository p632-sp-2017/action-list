import React from 'react';
import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  StyleSheet,
  AppRegistry,
  View,
  Text,
  Image,
  TouchableHighlight,
  DrawerLayoutAndroid,
} from 'react-native';

import sidemenu_press from '../actions/action_items';
import SideMenu from '../components/SideMenu.js'
import DisplayList from '../components/display_list';

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
});

export default ActionListContainer;

  toggleDrawer() {
    if (this.state.drawerClosed) {
      this.DRAWER.openDrawer();
    } else {
      this.DRAWER.closeDrawer();
    }
  }  
  setDrawerState() {
    this.setState({
      drawerClosed: !this.state.drawerClosed
    });
  }
  render(){
    return(
      <DrawerLayoutAndroid
      drawerWidth={300}
      ref={(drawerElement) => { this.DRAWER = drawerElement; }}
      drawerPosition={DrawerLayoutAndroid.positions.Right}
      onDrawerOpen={this.setDrawerState}
      onDrawerClose={this.setDrawerState}
      renderNavigationView={SideMenu}>
        
      <View style={style.toolbar}>
      <Image
        style={style.toolbarTrident}
        source={require('../components/img/trident-large.png')}
      />
      <Text style={style.toolbarTitle}>
        IU Action List
      </Text>
      <Image
        style={style.toolbarSearch}
        source={require('../components/img/search.png')}
      />
      <TouchableHighlight onPress={this.toggleDrawer}>
        <Image
          style={style.toolbarButton}
          source={require('../components/img/menu-icon.png')}
        />
      </TouchableHighlight>
      </View>
      <DisplayList/>
    </DrawerLayoutAndroid>
  );
  }
}

