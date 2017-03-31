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
