import React from 'react';
import { mount } from 'enzyme';
import { Text, View } from 'react-native';
import Button from 'react-native-button';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import ActionItemBody from '../../app/components/actionItemBody';
import { ActionItemProps, Middlewares, InitialState } from '../../test_constants/componentTests';

require('../../testConfig');

jest.unmock('../../app/components/actionItemBody');

describe('Action_Item_Body', () => {
  it('correctly passes our props to Text Components in the View Component', () => {
    const mockStore = configureStore(Middlewares);
    const store = mockStore(InitialState);
    const wrapper = mount(
      <Provider store={store}>
        <ActionItemBody {...ActionItemProps} />
      </Provider>);
    expect(wrapper.contains(View));
    expect(wrapper.find(View).find(Text).first().text()).to.equal('Document Type: ');
    expect(wrapper.find(View).find(Text).at(1).text()).to.equal('process type label');
    expect(wrapper.find(View).find(Text).at(2).text()).to.equal('Initiator: ');
    expect(wrapper.find(View).find(Text).at(3).text()).to.equal('initiator');
    expect(wrapper.find(View).find(Text).at(4).text()).to.equal('Date Created: ');
    expect(wrapper.find(View).find(Text).at(5).text()).to.equal('creation date');
    expect(wrapper.find(View).find(Text).at(6).text()).to.equal('Document Route Status: ');
    expect(wrapper.find(View).find(Text).at(7).text()).to.equal('process instance status');
    expect(wrapper.find(View).find(Text).at(8).text()).to.equal('Action Requested: ');
    expect(wrapper.find(View).find(Text).at(9).text()).to.equal('action requested label');
  });

  it('should have correct button titles', () => {
    const mockStore = configureStore(Middlewares);
    const store = mockStore(InitialState);
    const wrapper = mount(
      <Provider store={store}>
        <ActionItemBody {...ActionItemProps} />
      </Provider>);
    expect(wrapper.find(View).find(View).find(Button)
      .first()
        .text()).to.equal('Route Log');
    expect(wrapper.find(View).find(View).find(Button)
      .at(1)
        .text()).to.equal('Take Action');
  });
});
