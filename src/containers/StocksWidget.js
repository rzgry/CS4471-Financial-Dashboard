import React from 'react';
import { observer } from 'mobx-react';
import { Button, Icon } from 'semantic-ui-react';
import { stocksStore } from '../stores';
import { StockDisplay } from '../components';

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
          <StockDisplay
            symbol={stocksStore.stocks['Global Quote']['01. symbol']}
            price={stocksStore.stocks['Global Quote']['05. price']}
            percentChange={stocksStore.stocks['Global Quote']['10. change percent']}
          />
          <div style={{ margin: '1em', marginBottom: '2em' }}>
            <p style={{ float: 'right', color: 'gray' }}>
              {`Last updated: ${new Date(stocksStore.stocks.timestamp).toLocaleString()}`}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default StocksWidget;
