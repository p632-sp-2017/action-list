import deepFreeze from 'deep-freeze';
import expect from 'expect';
import reducer from '../../app/reducers/actionItems';
import { toggleDrawer, sortActionList, resetPreferences } from '../../app/actions/actionItems';
import { sortTypes, preferenceColors, defaultState } from '../../app/lib/commons';

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
    const action = resetPreferences();

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
