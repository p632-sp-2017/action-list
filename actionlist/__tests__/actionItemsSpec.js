import deepFreeze from 'deep-freeze';
import expect from 'expect';

import reducer from '../app/reducers/action_items';
import { toggleDrawer, sortByCreationDate, sortByLastApprovedDate, sortByProcessType, sortByActionRequested } from '../app/actions/action_items';

describe('action_items', () => {
  it('should have the opposite drawerExpanded value when toggled', () => {
    const beforeState = {
      drawerExpanded: false,
    };
    const action = toggleDrawer();
    const afterState = {
      drawerExpanded: true,
    };

    deepFreeze(beforeState);
    deepFreeze(action);

    expect(reducer(beforeState, action)).toEqual(afterState);
  });
});

describe('action_items', () => {
  it('should have all the cards sorted by creationDate', () => {
    const beforeState = {
      dataSource: [
        {
          creationDate: '2017-02-21T12:00:00',
        },
        {
          creationDate: '2013-02-21T12:00:00',
        },
        {
          creationDate: '2017-08-21T12:00:00',
        },
        {
          creationDate: '2017-02-10T12:00:00',
        },
        {
          creationDate: '2017-02-10T10:00:00',
        },
      ],
    };
    const action = sortByCreationDate();

    const afterState = {
      dataSource: [
        {
          creationDate: '2013-02-21T12:00:00',
        },
        {
          creationDate: '2017-02-10T10:00:00',
        },
        {
          creationDate: '2017-02-10T12:00:00',
        },
        {
          creationDate: '2017-02-21T12:00:00',
        },
        {
          creationDate: '2017-08-21T12:00:00',
        },
      ],
      sortValue: 'CreationDate',
    };

    deepFreeze(beforeState);
    deepFreeze(action);
    expect(reducer(beforeState, action)).toEqual(afterState);
  });
});

describe('action_items', () => {
  it('should have all the cards sorted by lastApprovedDate', () => {
    const beforeState = {
      dataSource: [
        {
          lastApprovedDate: '2017-02-21T12:00:00',
        },
        {
          lastApprovedDate: '2013-02-21T12:00:00',
        },
        {
          lastApprovedDate: '2017-08-21T12:00:00',
        },
        {
          lastApprovedDate: '2017-02-10T12:00:00',
        },
        {
          lastApprovedDate: '2017-02-10T10:00:00',
        },
      ],
    };
    const action = sortByLastApprovedDate();

    const afterState = {
      dataSource: [
        {
          lastApprovedDate: '2013-02-21T12:00:00',
        },
        {
          lastApprovedDate: '2017-02-10T10:00:00',
        },
        {
          lastApprovedDate: '2017-02-10T12:00:00',
        },
        {
          lastApprovedDate: '2017-02-21T12:00:00',
        },
        {
          lastApprovedDate: '2017-08-21T12:00:00',
        },
      ],
      sortValue: 'ApprovedDate',
    };

    deepFreeze(beforeState);
    deepFreeze(action);
    expect(reducer(beforeState, action)).toEqual(afterState);
  });
});


describe('action_items', () => {
  it('should have all the cards sorted by label in processType', () => {
    const beforeState = {
      dataSource: [
        {
          processType: { label: 'deny' },
        },
        {
          processType: { label: 'approve' },
        },
        {
          processType: { label: 'forward' },
        },
        {
          processType: { label: 'open' },
        },
        {
          processType: { label: 'close' },
        },
      ],
    };
    const action = sortByProcessType();

    const afterState = {
      dataSource: [
        {
          processType: { label: 'approve' },
        },
        {
          processType: { label: 'close' },
        },
        {
          processType: { label: 'deny' },
        },
        {
          processType: { label: 'forward' },
        },
        {
          processType: { label: 'open' },
        },
      ],
      sortValue: 'ProcessType',
    };

    deepFreeze(beforeState);
    deepFreeze(action);
    expect(reducer(beforeState, action)).toEqual(afterState);
  });
});


describe('action_items', () => {
  it('should have all the cards sorted by label in Action Requested', () => {
    const beforeState = {
      dataSource: [
        {
          actionRequested: { label: 'reject' },
        },
        {
          actionRequested: { label: 'approve' },
        },
        {
          actionRequested: { label: 'forward' },
        },
      ],

    };
    const action = sortByActionRequested();

    const afterState = {
      dataSource: [
        {
          actionRequested: { label: 'approve' },
        },
        {
          actionRequested: { label: 'forward' },
        },
        {
          actionRequested: { label: 'reject' },
        },
      ],
      sortValue: 'ActionRequested',
    };

    deepFreeze(beforeState);
    deepFreeze(action);
    expect(reducer(beforeState, action)).toEqual(afterState);
  });
});
