import React from 'react';
import { observer } from 'mobx-react';
import { Button, Icon } from 'semantic-ui-react';
import { stocksStore } from '../stores';
import { DataTable, LastUpdated } from '../components';

const TABLE_HEADERS = {
  PRICE: 'Price',
  SYMBOL: 'Symbol',
  CHANGE: 'Change',
  NET_CHANGE: 'Net Change',
};

@observer
class StocksWidget extends React.Component {
  render() {
    const { onUnsubscribe } = this.props;
    return (
      <div>
        <h3>
          Stocks
          {' '}
          <Button onClick={onUnsubscribe} style={{ float: 'right' }} size="tiny">
            <Icon name="close" />
            Unsubscribe
          </Button>
        </h3>
        <div>
          <DataTable
            headers={['Symbol', 'Price', 'Change', 'Net Change']}
            data={[
              {
                [TABLE_HEADERS.SYMBOL]: stocksStore.stocks['Global Quote']['01. symbol'],
                [TABLE_HEADERS.PRICE]: stocksStore.stocks['Global Quote']['05. price'],
                [TABLE_HEADERS.CHANGE]: stocksStore.stocks['Global Quote']['10. change percent'],
                [TABLE_HEADERS.NET_CHANGE]: 0.2,
              },
            ]}
          />
          <LastUpdated timestamp={stocksStore.stocks.timestamp} />
        </div>
      </div>
    );
  }
}

export default StocksWidget;
