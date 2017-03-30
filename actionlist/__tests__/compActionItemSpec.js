import React from 'react';
import ReactNative from 'react-native';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../app/reducers/index';
import ActionItem from '../app/components/action_item';
import configureMockStore from 'redux-mock-store'; 

describe('action_items',() => {
    it('should take props and contain row title and image source', () => {
        const defaultId = 10;
        const props = {
            rowData : {
                expanded: false,
                title: 'Hello World'
            },
            onToggle: (defaultId) => {}
        }
        const store = createStore(reducer);
        const wrapper = shallow(
            <Provider store={ store }>
                <ActionItem { ...props } />
            </Provider>)
       expect(wrapper.contains('View'))
       expect(wrapper.contains('Image'))
    })
    
    it('should include actionItemBody if expanded is true',() => {
        const defaultId = 5;
        const props = {
            rowData : {
                expanded: false,
                title: 'Hello World'
            },
            onToggle: (defaultId) => {}
        }
        const store = createStore(reducer);
        const wrapper = shallow(
            <Provider store={ store }>
                <ActionItem { ...props } />
            </Provider>)
        expect(wrapper.contains('ActionItemBody'))
    })
})


