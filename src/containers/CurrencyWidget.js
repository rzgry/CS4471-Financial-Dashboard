import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { DataTable, LastUpdated } from '../components';

const TABLE_HEADERS = {
  CURRENCY: 'Currency',
  PRICE: 'Price',
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
          headers={Object.values(TABLE_HEADERS)}
          data={[
            {
              [TABLE_HEADERS.CURRENCY]: 'EUR-USD',
              [TABLE_HEADERS.PRICE]: 1.1326,
            },
          ]}
        />
        <LastUpdated timestamp={1} />
      </div>
    );
  }
}

export default CurrencyWidget;
