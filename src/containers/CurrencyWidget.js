import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { DataTable } from '../components';

const TABLE_HEADERS = {
  PRICE: 'Price',
  CURRENCY: 'Currency',
  CHANGE: 'Change',
  NET_CHANGE: 'Net Change',
};

// eslint-disable-next-line react/prefer-stateless-function
class CurrencyWidget extends React.Component {
  render() {
    const { onUnsubscribe } = this.props;
    return (
      <div>
        <h3>
          Currency
          {' '}
          <Button onClick={onUnsubscribe} style={{ float: 'right' }} size="tiny">
            <Icon name="close" />
            Unsubscribe
          </Button>
        </h3>
        <DataTable
          headers={['Currency', 'Price', 'Change', 'Net Change']}
          data={[
            {
              [TABLE_HEADERS.CURRENCY]: 'EUR-USD',
              [TABLE_HEADERS.PRICE]: 1.1326,
              [TABLE_HEADERS.CHANGE]: '0.0022',
              [TABLE_HEADERS.NET_CHANGE]: '+0.19%',
            },
          ]}
        />
      </div>
    );
  }
}

export default CurrencyWidget;
