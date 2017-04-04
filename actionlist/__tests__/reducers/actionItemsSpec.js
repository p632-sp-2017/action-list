import deepFreeze from 'deep-freeze';
import expect from 'expect';

import reducer from '../../app/reducers/action_items';
import { toggleDrawer } from '../../app/actions/action_items';

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
