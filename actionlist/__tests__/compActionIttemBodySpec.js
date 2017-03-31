import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import ActionItemBody from '../app/components/action_item_body';

jest.unmock('redux-mock-store');
jest.unmock('../app/components/action_item_body');

describe('Action_Item_Body', () => {
  it('maintains the tree structure', () => {
    const props = {
      processType: {
        label: 'process type label',
      },
      actionRequested: {
        label: 'action requested label',
      },
      initiator: 'initiator',
      lastApprovedDate: 'last approved date',
      processInstanceStatus: {
        label: 'processs instance status',
      },
    };
    const middlewares = [];
    const initialState = {};
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);
    const wrapper = shallow(
      <Provider store={store}>
        <ActionItemBody {...props} />
      </Provider>);
    expect(wrapper.contains('View'));
    expect(wrapper.contains('Text'));
  });
});
