import React from 'react';
import { Label } from 'semantic-ui-react';

const StockDisplay = ({ symbol, price, percentChange }) => (
  <div>
    <strong>{symbol}</strong>
    {' '}
    {price}
    {' '}
    <Label color={parseFloat(percentChange, 10) > 0 ? 'green' : 'red'} image>
      {percentChange}
    </Label>
  </div>
);

export default StockDisplay;
