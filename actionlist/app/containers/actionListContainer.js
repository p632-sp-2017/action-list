import React from 'react';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';
import {
  View,
} from 'react-native';

import Header from '../components/header';
import DisplayList from '../components/displayList';
import SideMenu from '../components/sideMenu';
import { closeDrawer } from '../actions/actionItems';

const ActionListContainer = ({ drawerExpanded, setDrawerClose }) => (
  <Drawer
    openDrawerOffset={100}
    type="overlay"
    open={drawerExpanded}
    side={'right'}
    tapToClose
    content={<SideMenu />}
    onClose={() => setDrawerClose()}
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
  setDrawerClose: () => dispatch(closeDrawer()),
});

ActionListContainer.propTypes = {
  drawerExpanded: React.PropTypes.bool.isRequired,
  setDrawerClose: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionListContainer);
