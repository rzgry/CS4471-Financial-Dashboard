import React from 'react';
import { observer } from 'mobx-react';
import { stocksStore } from '../stores';

@observer
class StocksWidget extends React.Component {
  render() {
    return (
      <div>
        <h4>Stocks</h4>
        <div>
          <p>{stocksStore.stocks['Global Quote']['01. symbol']}</p>
          <p>{stocksStore.stocks['Global Quote']['05. price']}</p>
        </div>
      </div>
    );
  }
}

export default StocksWidget;
