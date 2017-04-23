import React from 'react';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';
import {
  View,
} from 'react-native';

import Header from '../components/header';
import DisplayList from '../components/displayList';
import SideMenu from '../components/sideMenu';
import { toggleDrawer } from '../actions/actionItems';

const ActionListContainer = ({ drawerExpanded, setDrawerState }) => (
  <Drawer
    openDrawerOffset={100}
    type="overlay"
    open={drawerExpanded}
    side={'right'}
    tapToClose
    content={<SideMenu />}
    onClose={() => setDrawerState()}
  >
    <View>
      <Header displayMenu />
      <DisplayList />
    </View>
  </Drawer>
);

const mapStateToProps = state => ({
  drawerExpanded: state.actionItemsReducer.drawerExpanded,
});

const mapDispatchToProps = dispatch => ({
  setDrawerState: () => dispatch(toggleDrawer()),
});

ActionListContainer.propTypes = {
  drawerExpanded: React.PropTypes.bool.isRequired,
  setDrawerState: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionListContainer);
