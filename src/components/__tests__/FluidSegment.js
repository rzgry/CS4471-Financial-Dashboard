import React from 'react';
import renderer from 'react-test-renderer';
import FluidSegment from '../FluidSegment';

describe('<FluidSegment />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FluidSegment />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
