import React from 'react';
import { mount } from 'enzyme';
import { View } from 'react-native';
import Button from 'react-native-button';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import PreferencesButtons from '../../app/components/preferencesButtons';
import { Middlewares, InitialState } from '../../test_constants/componentTests';

require('../../testConfig');

jest.unmock('../../app/components/preferencesButtons');

describe('PreferencesButton', () => {
  it('should render the inner tree component structure properly', () => {
    const mockStore = configureStore(Middlewares);
    const store = mockStore(InitialState);
    const wrapper = mount(
      <Provider store={store}>
        <PreferencesButtons />
      </Provider>);
    expect(wrapper.find(View).length).to.equal(3);
    expect(wrapper.find(View).find(Button)
      .first()
        .text()).to.equal('Ok');
    expect(wrapper.find(View).find(Button)
      .at(1)
        .text()).to.equal('Reset');
  });
});
