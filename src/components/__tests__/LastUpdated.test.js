import React from 'react';
import renderer from 'react-test-renderer';
import LastUpdated from '../LastUpdated';

describe('<LastUpdated />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LastUpdated timestamp={new Date().getTime()} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
