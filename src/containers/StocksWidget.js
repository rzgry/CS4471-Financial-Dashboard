import React from 'react';
import { Statistic } from 'semantic-ui-react';

const StocksWidget = () => (
  <div>
    <h4>Stocks</h4>
    <Statistic color="green" label="Money" value="10,000,000" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu ligula ex. Praesent
      volutpat scelerisque euismod. In nec augue at risus aliquam pharetra. Pellentesque accumsan
      porta leo, at dapibus sapien rutrum in. Aliquam erat volutpat.
    </p>
  </div>
);

export default StocksWidget;
