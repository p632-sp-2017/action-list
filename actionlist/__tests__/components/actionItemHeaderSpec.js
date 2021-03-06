import React from 'react';
import { mount } from 'enzyme';
import { View, Text, Image } from 'react-native';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import ActionItemHeader from '../../app/components/actionItemHeader';
import { Middlewares, InitialState, HeaderProps } from '../../test_constants/componentTests';

require('../../testConfig');

jest.unmock('../../app/components/actionItemHeader');

describe('action_item_headers', () => {
  it('should take props and contain row title, actual lengths', () => {
    const mockStore = configureStore(Middlewares);
    const store = mockStore(InitialState);
    const wrapper = mount(
      <Provider store={store}>
        <ActionItemHeader {...HeaderProps} />
      </Provider>);
    expect(wrapper.find(View)
      .first().length).to.equal(1);
    expect(wrapper.find(View).find(Text).length).to.equal(1);
  });
  it('should contain image source according to the props passed', () => {
    const icons = {
      /* eslint-disable global-require */
      /* rule disabled since image loading need not be global */
      up: require('../../app/components/img/up-icon.png'),
      down: require('../../app/components/img/down-icon.png'),
      /* eslint-enable global-require */
    };
    const mockStore = configureStore(Middlewares);
    const store = mockStore(InitialState);
    const props = {
      ...HeaderProps,
      isActive: false,
    };
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
