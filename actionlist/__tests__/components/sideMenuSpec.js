import React from 'react';
import { mount } from 'enzyme';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import SideMenu from '../../app/components/sideMenu';
import { Middlewares, InitialState } from '../../test_constants/componentTests';

require('../../testConfig');

jest.unmock('../../app/components/sideMenu');

describe('SideMenu', () => {
  it('should render the inner tree component structure properly', () => {
    const mockStore = configureStore(Middlewares);
    const store = mockStore(InitialState);
    const wrapper = mount(
      <Provider store={store}>
        <SideMenu />
      </Provider>);
    expect(wrapper.find(View).length).to.equal(66);
    expect(wrapper.find(Text).length).to.equal(30);
    expect(wrapper.find(Text).first().text()).to.equal('Home');
    expect(wrapper.find(Text).at(1).text()).to.equal('Preferences');
    expect(wrapper.find(Text).at(2).text()).to.equal('Sort');
    expect(wrapper.find(Text).at(3).text()).to.equal('Date Created');
    expect(wrapper.find(Text).at(4).text()).to.equal('Date Last Approved');
    expect(wrapper.find(Text).at(5).text()).to.equal('Process Type');
    expect(wrapper.find(Text).at(6).text()).to.equal('Action Requested');
    expect(wrapper.find(Text).at(7).text()).to.equal('Filter');
    expect(wrapper.find(Text).at(8).text()).to.equal('Document Route Status');
    expect(wrapper.find(Text).at(9).text()).to.equal('Document Type');
    expect(wrapper.find(Text).at(10).text()).to.equal('Action Requested');
    expect(wrapper.find(Text).at(11).text()).to.equal('Document Created Date');
    expect(wrapper.find(Text).at(12).text()).to.equal('From: ');
    expect(wrapper.find(Text).at(13).text()).to.equal('select date');
    expect(wrapper.find(Text).at(16).text()).to.equal('To: ');
    expect(wrapper.find(Text).at(17).text()).to.equal('select date');
    expect(wrapper.find(Text).at(20).text()).to.equal('Document Assigned Date');
    expect(wrapper.find(Text).at(21).text()).to.equal('From: ');
    expect(wrapper.find(Text).at(22).text()).to.equal('select date');
    expect(wrapper.find(Text).at(25).text()).to.equal('To: ');
    expect(wrapper.find(Text).at(26).text()).to.equal('select date');
    expect(wrapper.find(Text).at(29).text()).to.equal('Reset Filters');
  });
});
