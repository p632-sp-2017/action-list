import React from 'react';
import { mount } from 'enzyme';
import { View, Button } from 'react-native';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import SideMenu from '../app/components/SideMenu';

require('../testConfig');

jest.unmock('../app/components/SideMenu');

describe('SideMenu', () => {
  it('should render the inner tree component structure properly', () => {
    const middlewares = [];
    const initialState = {};
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <SideMenu />
      </Provider>);
    expect(wrapper.find(View).length).to.equal(9);
    expect(wrapper.find(Button).length).to.equal(4);
    expect(wrapper.find(Button).length).to.equal(4);
    expect(wrapper.find(Button).first().props().title).to.equal('Home');
    expect(wrapper.find(Button).at(1).props().title).to.equal('Preferences');
    expect(wrapper.find(Button).at(2).props().title).to.equal('Filter');
    expect(wrapper.find(Button).at(3).props().title).to.equal('Sort');
  });
});
