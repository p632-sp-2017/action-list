jest.unmock('redux-mock-store');
jest.unmock('../app/components/action_item');

import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import configureStore from 'redux-mock-store'
import { createStore } from 'redux';
import reducer from '../app/reducers/index';
import ActionItem from '../app/components/action_item';

describe('action_items', () => {
  it('should take props and contain row title and image source', () => {
    const props = {
      rowData: {
        expanded: false,
        title: 'Hello World',
      },
      onToggle: () => {},
    };
    const middlewares = [];
    const initialState = {};
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);
    const wrapper = shallow(
      <Provider store={store}>
        <ActionItem {...props} />
      </Provider>);
    expect(wrapper.contains('View'));
    expect(wrapper.find('View'));
    expect(wrapper.find('Image'));
    expect(wrapper.props().rowData).to.be.defined;
    expect(wrapper.props().rowData.title).to.equal('Hello World');
  });

  it('should include actionItemBody if expanded is true', () => {
    const props = {
      rowData: {
        expanded: false,
        title: 'Hello World',
      },
      onToggle: () => {},
    };
    const middlewares = [];
    const mockStore = configureStore(middlewares);
    const initialState = {};
    const store = mockStore(initialState);
    const wrapper = shallow(
      <Provider store={store}>
        <ActionItem {...props} />
      </Provider>);
    expect(wrapper.contains('ActionItemBody'));
  });
});
