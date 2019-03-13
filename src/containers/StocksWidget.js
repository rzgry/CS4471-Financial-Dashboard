import React from 'react';
import { observer } from 'mobx-react';
import { stocksStore } from '../stores';

@observer
class StocksWidget extends React.Component {
  render() {
    return (
      <div>
        <h4>Stocks</h4>
      </div>
    );
  }
}

export default StocksWidget;
