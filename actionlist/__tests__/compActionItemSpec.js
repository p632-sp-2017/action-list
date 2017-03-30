import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
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
    const store = createStore(reducer);
    const wrapper = shallow(
      <Provider store={store}>
        <ActionItem {...props} />
      </Provider>);
    expect(wrapper.contains('View'));
    expect(wrapper.contains('Image'));
  });

  it('should include actionItemBody if expanded is true', () => {
    const props = {
      rowData: {
        expanded: false,
        title: 'Hello World',
      },
      onToggle: () => {},
    };
    const store = createStore(reducer);
    const wrapper = shallow(
      <Provider store={store}>
        <ActionItem {...props} />
      </Provider>);
    expect(wrapper.contains('ActionItemBody'));
  });
});
