import React from 'react';
import { mount } from 'enzyme';
import { View, Text, Image } from 'react-native';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import ActionItemHeader from '../app/components/action_item_header';

require('react-native-mock-render/mock');

jest.unmock('redux-mock-store');

jest.unmock('../app/components/action_item_header');

const jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

describe('action_items', () => {
  it('should take props and contain row title, actual lengths and should not contain the ActionItemBody child component as expanded is false', () => {
    const props = {
      rowData: {
        title: 'Hello World',
      },
      index: 3,
      isActive: true,
    };
    const middlewares = [];
    const initialState = {};
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <ActionItemHeader {...props} />
      </Provider>);
    expect(wrapper.find(View).find(Text)
          .text()).to.equal('Hello World');
    expect(wrapper.find(View)
      .first().length).to.equal(1);
  });
  it('should contain image source according to the props passed', () => {
    const props = {
      rowData: {
        title: 'Hello World',
      },
      index: 3,
      isActive: false,
    };
    const middlewares = [];
    const icons = {
      /* eslint-disable global-require */
      /* rule disabled since image loading need not be global */
      up: require('../app/components/img/up-icon.png'),
      down: require('../app/components/img/down-icon.png'),
      /* eslint-enable global-require */
    };
    const initialState = {};
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <ActionItemHeader {...props} />
      </Provider>);
    expect(wrapper.find(View)
      .first().find(Image)
        .first()).to.have.length(1);
    expect(wrapper.find(View)
      .first().find(Image)
        .first()
          .props().source).to.equal(icons.down);
  });
});
