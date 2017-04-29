import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import { preferencesDrawerOpen } from '../actions/actionItems';
import { Colors } from '../lib/commons';

const style = StyleSheet.create({
  toolbar: {
    backgroundColor: Colors.iuCrimsonDarker,
    borderTopColor: Colors.iuCrimsonDark,
    borderTopWidth: 5,
    flexDirection: 'row',
  },
  toolbarTrident: {
    width: 43,
    height: 50,
    marginLeft: 10,
  },
  toolbarTitle: {
    color: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'BentonSansBold, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 10,
    marginTop: 7,
    flex: 1,
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
const Header = ({ displayMenu, onOpenDrawer }) => (
  <View style={style.toolbar}>
    <Image
      style={style.toolbarTrident}
      source={require('./img/trident-large.png')}
    />
    <Text style={style.toolbarTitle}>
      IU Action List
    </Text>
    { displayMenu &&
      <TouchableHighlight onPress={() => onOpenDrawer()}>
        <Image
          style={style.toolbarButton}
          source={require('./img/menu-icon.png')}
        />
      </TouchableHighlight>
    }
  </View>
);

/* eslint-enable global-require */

const mapDispatchToProps = dispatch => ({
  onOpenDrawer: () => dispatch(preferencesDrawerOpen()),
});

Header.propTypes = {
  onOpenDrawer: React.PropTypes.func.isRequired,
  displayMenu: React.PropTypes.bool.isRequired,
};

export default connect(null, mapDispatchToProps)(Header);
