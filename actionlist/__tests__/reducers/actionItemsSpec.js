import deepFreeze from 'deep-freeze';
import expect from 'expect';
import reducer, { defaultState } from '../../app/reducers/actionItems';
import { preferencesDrawerOpen, filterActionList,
  sortActionList, filterDate,
  filterReset, preferencesReset } from '../../app/actions/actionItems';
import { sortTypes, filterStatus, preferenceColors } from '../../app/lib/commons';

describe('action_items', () => {
  it('should have the opposite drawerExpanded value when toggled', () => {
    const beforeState = {
      drawerExpanded: false,
    };
    const action = preferencesDrawerOpen();
    const afterState = {
      drawerExpanded: true,
    };

    deepFreeze(beforeState);
    deepFreeze(action);

    expect(reducer(beforeState, action)).toEqual(afterState);
  });
});

describe('action_items', () => {
  it('should be filtered by actionRequested', () => {
    const beforeState = {
      filterStatus,
    };
    const action = filterActionList({ filterType: 'actionRequested', value: 'Acknowledge' });
    const afterState = {
      drawerExpanded: false,
      filterStatus: {
        ...filterStatus,
        actionRequested: 'Acknowledge',
      },
    };
    deepFreeze(beforeState);
    deepFreeze(action);
    expect(reducer(beforeState, action)).toEqual(afterState);
  });
});

describe('action_items', () => {
  it('should be filtered by documentType', () => {
    const beforeState = {
      filterStatus,
    };
    const action = filterActionList({ filterType: 'documentType', value: 'X' });
    const afterState = {
      drawerExpanded: false,
      filterStatus: {
        ...filterStatus,
        documentType: 'X',
      },
    };
    deepFreeze(beforeState);
    deepFreeze(action);
    expect(reducer(beforeState, action)).toEqual(afterState);
  });
});

describe('action_items', () => {
  it('should be filtered by documentRouteStatus', () => {
    const beforeState = {
      filterStatus,
    };
    const action = filterActionList({ filterType: 'documentRouteStatus', value: 'Disapproved' });
    const afterState = {
      drawerExpanded: false,
      filterStatus: {
        ...filterStatus,
        documentRouteStatus: 'Disapproved',
      },
    };
    deepFreeze(beforeState);
    deepFreeze(action);
    expect(reducer(beforeState, action)).toEqual(afterState);
  });
});

describe('action_items', () => {
  it('should be filtered by documentCreationDate', () => {
    const beforeState = {
      filterStatus,
    };
    const action = filterDate({ type: 'documentCreationDate', position: 'start', date: '2017-07-08' });
    const afterState = {
      drawerExpanded: false,
      filterStatus: {
        ...filterStatus,
        documentCreationDate: {
          ...filterStatus.documentCreationDate,
          start: '2017-07-08',
        },
      },
    };
    deepFreeze(beforeState);
    deepFreeze(action);
    expect(reducer(beforeState, action)).toEqual(afterState);
  });
});

describe('action_items', () => {
  it('should be filtered by documentAssignedDate', () => {
    const beforeState = {
      filterStatus,
    };
    const action = filterDate({ type: 'documentAssignedDate', position: 'start', date: '2017-07-08' });
    const afterState = {
      drawerExpanded: false,
      filterStatus: {
        ...filterStatus,
        documentAssignedDate: {
          ...filterStatus.documentAssignedDate,
          start: '2017-07-08',
        },
      },
    };
    deepFreeze(beforeState);
    deepFreeze(action);
    expect(reducer(beforeState, action)).toEqual(afterState);
  });
});

describe('action_items', () => {
  it('should reset filters', () => {
    const beforeState = {
      filterStatus: {
        documentRouteStatus: 'Acknowledge',
        documentType: 'Y',
        documentCreationDate: {
          start: '2017-08-01',
          end: '2017-12-01',
        },
        documentAssignedDate: {
          start: '2012-01-06',
          end: '2017-02-01',
        },
        actionRequested: 'Approve',
      },
    };
    const action = filterReset();
    const afterState = {
      drawerExpanded: false,
      filterStatus,
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
    const action = sortActionList(sortTypes.creationDate);

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
      drawerExpanded: false,
      optionSelected: sortTypes.creationDate,
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
    const action = sortActionList(sortTypes.lastApprovedDate);

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
      drawerExpanded: false,
      optionSelected: sortTypes.lastApprovedDate,
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
    const action = sortActionList(sortTypes.processType);

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
      drawerExpanded: false,
      optionSelected: sortTypes.processType,
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
    const action = sortActionList(sortTypes.actionRequested);

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
      drawerExpanded: false,
      optionSelected: sortTypes.actionRequested,
    };

    deepFreeze(beforeState);
    deepFreeze(action);
    expect(reducer(beforeState, action)).toEqual(afterState);
  });
});

describe('action_items', () => {
  it('should have the colors reset to white on pressing reset button', () => {
    const beforeState = {
      dropdownColors: {
        Saved: preferenceColors.aqua,
        Initiated: preferenceColors.green,
        Disapproved: preferenceColors.orange,
        Enroute: preferenceColors.pink,
        Approved: preferenceColors.purple,
        Final: preferenceColors.aqua,
        Processed: preferenceColors.orange,
        Exception: preferenceColors.grey,
        Cancel: preferenceColors.tan,
      },
    };
    const action = preferencesReset();

    const afterState = {
      dropdownColors: {
        ...defaultState.dropdownColors,
      },
    };

    deepFreeze(beforeState);
    deepFreeze(action);
    expect(reducer(beforeState, action)).toEqual(afterState);
  });
});
