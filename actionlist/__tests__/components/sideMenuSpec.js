import React from 'react';
import { mount } from 'enzyme';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import SideMenu from '../../app/components/SideMenu';
import { Middlewares, InitialState } from '../../test_constants/componentTests';

require('../../testConfig');

jest.unmock('../../app/components/SideMenu');

describe('SideMenu', () => {
  it('should render the inner tree component structure properly', () => {
    const mockStore = configureStore(Middlewares);
    const store = mockStore(InitialState);
    const wrapper = mount(
      <Provider store={store}>
        <SideMenu />
      </Provider>);
    expect(wrapper.find(View).length).to.equal(21);
    expect(wrapper.find(Text).length).to.equal(15);
    expect(wrapper.find(Text).first().text()).to.equal('Home');
    expect(wrapper.find(Text).at(1).text()).to.equal('Preferences');
    expect(wrapper.find(Text).at(2).text()).to.equal('Filter');
    expect(wrapper.find(Text).at(3).text()).to.equal('Sort');
  });
});
