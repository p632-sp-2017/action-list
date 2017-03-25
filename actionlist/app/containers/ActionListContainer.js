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

import SideMenu from '../components/SideMenu.js'
import DisplayList from '../components/display_list';


export default class ActionListContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      drawerClosed: true,
    }
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.setDrawerState = this.setDrawerState.bind(this);
    
  }

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

