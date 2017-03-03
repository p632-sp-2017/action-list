/* eslint-env node, jest */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Panel from '../panel';

test('renders correctly', () => {
  const tree = renderer.create(
    <Panel />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
