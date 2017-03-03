import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Ali from '../action_list_items';

test('renders correctly', () => {
  const tree = renderer.create(
    <Ali />,
  ).toJSON();

  expect(tree).toMatchSnapshot()
});
