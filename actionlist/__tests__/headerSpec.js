import React from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import Header from '../app/components/header';

require('react-native-mock-render/mock');

jest.unmock('redux-mock-store');
jest.unmock('../app/components/header');

const jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

describe('header', () => {
  it('renders the component tree correctly with all default component props', () => {
    const middlewares = [];
    const initialState = {};
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);
    const icons = {
      /* eslint-disable global-require */
      /* rule disabled since image loading need not be global */
      logo: require('../app/components/img/trident-large.png'),
      /* eslint-enable global-require */
    };
    const wrapper = mount(
      <Provider store={store}>
        <Header />
      </Provider>);
    expect(wrapper.find(View).find(Image)
      .first()
        .props().source).to.equal(icons.logo);
    expect(wrapper.find(View)
      .first().find(Text)
        .first()
          .text()).to.be.equal('IU Action List');
    expect(wrapper.find(View).find(Image).length).to.equal(3);
  });
});
