import React from 'react';
import ShowDate from './ShowDate'
import renderer from 'react-test-renderer';

test('renders the same way every time', () => {
  const tree = renderer.create( <ShowDate /> ).toJSON();
  expect(tree).toMatchSnapshot();
});