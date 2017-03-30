import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { createStore } from 'redux';
import reducer from '../app/reducers/index';
import ActionItemBody from '../app/components/action_item_body';

describe('Action_Item_Body', () => {
  it('maintains the tree structure', ()=>{
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
    const wrapper = shallow(<ActionItemBody {...props} />)
  })
})