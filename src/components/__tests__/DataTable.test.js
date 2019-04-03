import React from 'react';
import renderer from 'react-test-renderer';
import DataTable from '../DataTable';

describe('<DataTable />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <DataTable headers={['testA', 'testB']} data={[{ testA: 'testA', testB: 'testB' }]} />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
