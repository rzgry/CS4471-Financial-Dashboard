import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import { DataTable, LastUpdated } from '../components';
import { currencyStore } from '../stores';

const TABLE_HEADERS = {
  CURRENCY: 'Currency',
  PRICE: 'Price',
};

// eslint-disable-next-line react/prefer-stateless-function
@observer
class CurrencyWidget extends React.Component {
  toggleShowMore = () => {
    currencyStore.showMore = !currencyStore.showMore;
  };

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
          data={currencyStore.visableRates.map(([name, rate]) => ({
            [TABLE_HEADERS.CURRENCY]: `${currencyStore.base}-${name}`,
            [TABLE_HEADERS.PRICE]: rate,
          }))}
        />
        <LastUpdated timestamp={currencyStore.timestamp} />
        <br />
        <Button onClick={this.toggleShowMore} fluid>
          <Icon name={currencyStore.showMore ? 'caret up' : 'caret down'} />
          {currencyStore.showMore ? 'Show less' : 'Show More'}
        </Button>
      </div>
    );
  }
}

export default CurrencyWidget;
