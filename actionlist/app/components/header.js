import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import { toggleDrawer } from '../actions/action_items';

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

/* eslint-disable global-require */
/* rule disabled since image loading need not be global */
const Header = ({ ontoggleDrawer }) => (
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
    <TouchableHighlight onPress={() => ontoggleDrawer()}>
      <Image
        style={style.toolbarButton}
        source={require('./img/menu-icon.png')}
      />
    </TouchableHighlight>
  </View>
);
/* eslint-enable global-require */

const mapDispatchToProps = dispatch => ({
  ontoggleDrawer: () => dispatch(toggleDrawer()),
});

Header.propTypes = {
  ontoggleDrawer: React.PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Header);
