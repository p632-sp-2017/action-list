import deepFreeze from 'deep-freeze';
import expect from 'expect';
import reducer from '../app/reducers/action_items';
import { toggleItem } from '../app/actions/action_items';

describe('action_items', () => {
  it('should have the opposite expanded value when toggled', () => {
    const cardToExpand = 'foo';
    const beforeState = {
      dataSource: {
        [cardToExpand]: {
          expanded: false,
        },
        otherCard: {
          expanded: false,
        },
      },
    };
    const action = toggleItem(cardToExpand);
    const afterState = {
      dataSource: {
        [cardToExpand]: {
          expanded: true,
        },
        otherCard: {
          expanded: false,
        },
      },
    };

    deepFreeze(beforeState);
    deepFreeze(action);

    expect(reducer(beforeState, action)).toEqual(afterState);
  });
});

describe('action_items', () => {
  it('should have only one card open at a time', () => {
    const cardToExpand = 'foobar';
    const beforeState = {
      dataSource: {
        [cardToExpand]: {
          expanded: false,
        },
        cardOne: {
          expanded: false,
        },
        cardTwo: {
          expanded: false,
        },
        cardThree: {
          expanded: true,
        },
      },
    };
    const action = toggleItem(cardToExpand);
    const afterState = {
      dataSource: {
        [cardToExpand]: {
          expanded: true,
        },
        cardOne: {
          expanded: false,
        },
        cardTwo: {
          expanded: false,
        },
        cardThree: {
          expanded: false,
        },
      },
    };

    deepFreeze(beforeState);
    deepFreeze(action);

    expect(reducer(beforeState, action)).toEqual(afterState);
  });
});
