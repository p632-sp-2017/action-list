/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  DrawerLayoutAndroid,
} from 'react-native';

import Header from '../components/header';
import DisplayList from '../components/display_list';
import SideMenu from '../components/SideMenu';
import { toggleDrawer } from '../actions/action_items';

class ActionListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerExpanded: props.drawerExpanded,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      drawerExpanded: nextProps.drawerExpanded,
    });
  }

  componentDidUpdate() {
    if (this.state.drawerExpanded) {
      this.DRAWER.openDrawer();
    } else {
      this.DRAWER.closeDrawer();
    }
  }

  render() {
    return (
      <DrawerLayoutAndroid
        ref={(c) => { this.DRAWER = c; }}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Right}
        onDrawerClose={this.props.setDrawerState}
        renderNavigationView={SideMenu}
      >
        <View>
          <Header />
          <DisplayList />
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

function mapStateToProps(state) {
  return {
    drawerExpanded: state.actionItemsReducer.drawerExpanded,
  };
}

const mapDispatchToProps = dispatch => ({
  setDrawerState: () => dispatch(toggleDrawer()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ActionListContainer);

ActionListContainer.propTypes = {
  drawerExpanded: React.PropTypes.bool.isRequired,
  setDrawerState: React.PropTypes.func.isRequired,
};
