\import React from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  DrawerLayoutAndroid,
} from 'react-native';

import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import DisplayList from '../components/display_list';
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
